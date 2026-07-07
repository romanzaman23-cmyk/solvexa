import { CONTACT_EMAIL } from '../config/contact'

export async function submitToFormSubmit({ fields, subject, honey = '' }) {
  if (honey) {
    return { success: true, skipped: true }
  }

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_EMAIL)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      ...fields,
      _subject: subject,
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
