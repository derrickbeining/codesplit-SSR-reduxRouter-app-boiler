import React from 'react'
import SignupForm from 'components/forms/SignupForm'
import Link from 'redux-first-router-link'
import Modal from 'components/common/Modal'
import { goToLoginPage } from 'actions/routerActions'

const SignupPage = props => (
  <Modal>
    <h1 className={undefined}>Sign Up</h1>
    <SignupForm />
    <p>Already joined? <Link to={goToLoginPage()}>Log in!</Link></p>
  </Modal>
)

export default SignupPage
