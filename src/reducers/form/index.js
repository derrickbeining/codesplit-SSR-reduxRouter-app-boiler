import { combineForms, createForms } from 'react-redux-form'
import loginForm from './loginForm'
import signupForm from './signupForm'

export default createForms({
  login: loginForm,
  signup: signupForm
})
