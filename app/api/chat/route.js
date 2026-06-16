import { GoogleGenAI } from '@google/genai'
import profile from '@/data/profile.json'
import projects from '@/data/projects.json'
import certs from '@/data/certifications.json'
import skills from '@/data/skills.json'

// Build context from your data files
const buildContext = () => `
You are an AI assistant for Gurpratap Singh's portfolio website.
Answer questions about him based only on this data:

NAME: ${profile.name.first} ${profile.name.last}
LOCATION: ${profile.location}
EMAIL: ${profile.email}
BIO: ${profile.bio_long}

PROJECTS: ${JSON.stringify(projects)}
CERTIFICATIONS: ${JSON.stringify(certs)}
SKILLS: ${JSON.stringify(skills)}

Be friendly, concise, and enthusiastic about his work.
If asked something not in the data, say you don't know.
`

export async function POST(req) {
  try {
    const { message } = await req.json()

    // Verify that the Google Gemini API key is defined in Environment Variables
    if (!process.env.GEMINI_API_KEY) {
      return Response.json({
        reply: "I am having trouble connecting to my brain right now. Please add the GEMINI_API_KEY to your Vercel project environment variables!"
      })
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY })

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: buildContext(),
      }
    })

    return Response.json({
      reply: response.text
    })
  } catch (error) {
    console.error("Gemini Chat API Error:", error);
    return Response.json({
      reply: "I am having trouble connecting to my brain right now. Please check if the Gemini API key is properly configured!"
    }, { status: 500 });
  }
}
