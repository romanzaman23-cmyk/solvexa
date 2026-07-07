import { submitToFormSubmit } from './submitToFormSubmit'

export async function sendNewsletterEmail({ email, honey = '' }) {
  return submitToFormSubmit({
    honey,
    subject: `New Solvexa Newsletter Signup — ${email}`,
    fields: {
      'Subscriber Email': email,
      'Form Type': 'Newsletter',
      _replyto: email,
    },
  })
}
