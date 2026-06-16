export async function POST(req) {
  const { name, email, message } = await req.json()

  // Send email via Resend
  const { Resend } = require('resend')
  const resend = new Resend(process.env.RESEND_API_KEY)

  await resend.emails.send({
    from: 'onboarding@resend.dev', // Default sender for unverified domains in Resend
    to: 'gurprataps040@gmail.com',
    subject: `Portfolio contact from ${name}`,
    text: `From: ${email}\n\n${message}`
  })

  return Response.json({ ok: true, message: "Thank you! Your message has been sent." })
}
