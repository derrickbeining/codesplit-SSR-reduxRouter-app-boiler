import isEmail from '../isEmail'
import isRequired from '../isRequired'


export default {
  isEmail,
  isRequired
}

export const emailErrorMsgs = {
  isRequired: 'This is a required field.',
  isEmail: 'Invalid email format.'
}
