export async function POST(req) {
  try {
    const { name, email, message } = await req.json()

    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { ok: false, message: "RESEND_API_KEY is not configured in your Vercel project environment variables." },
        { status: 500 }
      )
    }

    // Send email via Resend
    const { Resend } = require('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)

    const response = await resend.emails.send({
      from: 'onboarding@resend.dev', // Default sender for unverified domains in Resend
      to: 'gurprataps040@gmail.com',
      subject: `Portfolio contact from ${name}`,
      text: `From: ${email}\n\n${message}`
    })

    if (response.error) {
      console.error("Resend API error:", response.error)
      return Response.json(
        { ok: false, message: `Resend error: ${response.error.message}` },
        { status: 500 }
      )
    }

    return Response.json({ ok: true, message: "Thank you! Your message has been sent." })
  } catch (err) {
    console.error("Contact API exception:", err)
    return Response.json(
      { ok: false, message: `Failed to send message: ${err.message}` },
      { status: 500 }
    )
  }
}
