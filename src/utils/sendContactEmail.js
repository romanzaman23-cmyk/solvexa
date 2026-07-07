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

  let data
  try {
    data = await response.json()
  } catch {
    throw new Error('network')
  }

  const ok = data?.success === true || data?.success === 'true'
  if (!ok) {
    const msg = (data?.message || '').toLowerCase()
    if (msg.includes('activation') || msg.includes('activate')) {
      throw new Error('activation')
    }
    throw new Error(data?.message || 'send_failed')
  }

  return data
}
