import React from 'react'
import zxcvbn from 'zxcvbn'

let warning
let suggestions

export default (password = '', extraWordsToPenalize = []) => {
  const result = zxcvbn(password, extraWordsToPenalize)
  warning = result.feedback.warning
  suggestions = result.feedback.suggestions.join('. ')
  return result.score > 2
}

export const generateErrorMsg = () => (
  <ul>
    <li>Your password is too insecure.</li>
    {warning && <li>{warning}.</li>}
    {!!suggestions.length && <li>{suggestions}</li>}
  </ul>
)
