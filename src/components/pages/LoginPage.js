import React from 'react'
import Link from 'redux-first-router-link'
import Modal from 'components/common/Modal'
import LoginForm from 'components/forms/LoginForm'
import { goToSignupPage } from 'actions/routerActions'

const LoginPage = props => (
  <Modal>
    <h1 className={undefined}>Login</h1>
    <LoginForm />
    <p>No account? <Link to={goToSignupPage()}>Sign up!</Link></p>
  </Modal>
)

export default LoginPage
