import Anthropic from '@anthropic-ai/sdk'
import profile from '@/data/profile.json'
import projects from '@/data/projects.json'
import certs from '@/data/certifications.json'
import skills from '@/data/skills.json'

const client = new Anthropic()

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

    const response = await client.messages.create({
      model: 'claude-3-5-sonnet-latest', // Use official Claude 3.5 Sonnet API identifier
      max_tokens: 400,
      system: buildContext(),
      messages: [{ role: 'user', content: message }]
    })

    return Response.json({
      reply: response.content[0].text
    })
  } catch (error) {
    console.error("Anthropic Chat API Error:", error);
    return Response.json({
      reply: "I am having trouble connecting to my brain right now. Please check if the Anthropic API key is properly configured!"
    }, { status: 500 });
  }
}
