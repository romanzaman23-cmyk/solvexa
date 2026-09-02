import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

export const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'info.solvexadigital@gmail.com',
    pass: process.env.EMAIL_PASS || '',
  },
})

export const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL || 'info.solvexadigital@gmail.com'
