import { submitToFormSubmit } from './submitToFormSubmit'

export async function sendContactEmail({ name, email, service, message, honey = '' }) {
  return submitToFormSubmit({
    honey,
    subject: `New Solvexa Website Inquiry — ${name}`,
    fields: {
      'Full Name': name,
      'Email Address': email,
      'Service Needed': service,
      Message: message,
      _replyto: email,
    },
  })
}
