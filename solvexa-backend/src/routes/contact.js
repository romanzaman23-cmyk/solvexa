import express from 'express'
import { transporter, RECEIVER_EMAIL } from '../config/email.js'

const router = express.Router()

router.post('/', async (req, res) => {
  const { name, email, service, message, honey } = req.body

  // Spam bot trap
  if (honey) {
    return res.status(200).json({ success: true, message: 'Message submitted successfully' })
  }

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email, and message are required fields' })
  }

  try {
    const mailOptions = {
      from: `"Solvexa Website" <${process.env.EMAIL_USER || RECEIVER_EMAIL}>`,
      to: RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Project Inquiry from ${name} (${service || 'General'})`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #6366f1;">New Solvexa Project Inquiry</h2>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Service Requested:</strong> ${service || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #6366f1;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
    }

    if (process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions)
    }

    return res.status(200).json({
      success: true,
      message: 'Inquiry received successfully! We will contact you within 24 hours.',
    })
  } catch (error) {
    console.error('Contact email error:', error)
    return res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again or email us directly.',
    })
  }
})

export default router
