import { combineForms, createForms } from 'react-redux-form'
import loginForm from './loginForm'

export default createForms({
  login: loginForm
})
