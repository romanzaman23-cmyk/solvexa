import { CONTACT_EMAIL } from '../config/contact'

export async function sendContactEmail({ name, email, service, message }) {
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      service,
      message,
      _subject: `New Solvexa Website Inquiry — ${name}`,
      _replyto: email,
      _template: 'table',
      _captcha: 'false',
    }),
  })

  if (!response.ok) {
    throw new Error('Failed to send message')
  }

  const data = await response.json()
  if (data.success !== 'true' && data.success !== true) {
    throw new Error(data.message || 'Failed to send message')
  }

  return data
}
