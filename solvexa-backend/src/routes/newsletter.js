import express from 'express'
import { transporter, RECEIVER_EMAIL } from '../config/email.js'

const router = express.Router()

router.post('/', async (req, res) => {
  const { email, honey } = req.body

  if (honey) {
    return res.status(200).json({ success: true, message: 'Subscribed successfully' })
  }

  if (!email || !email.includes('@')) {
    return res.status(400).json({ success: false, error: 'Valid email is required' })
  }

  try {
    const mailOptions = {
      from: `"Solvexa Website" <${process.env.EMAIL_USER || RECEIVER_EMAIL}>`,
      to: RECEIVER_EMAIL,
      subject: `New Newsletter Subscription — ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #6366f1;">New Newsletter Subscriber</h2>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><em>Subscribed via Solvexa website footer.</em></p>
        </div>
      `,
    }

    if (process.env.EMAIL_PASS) {
      await transporter.sendMail(mailOptions)
    }

    return res.status(200).json({
      success: true,
      message: 'Successfully subscribed to Solvexa newsletter!',
    })
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return res.status(500).json({
      success: false,
      error: 'Subscription failed. Please try again.',
    })
  }
})

export default router
