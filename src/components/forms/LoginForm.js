import React from 'react'
import { Form, Control } from 'react-redux-form'
import Errors from 'components/common/form/Errors'
import EmailInput from 'components/common/form/EmailInput'
import PasswordInput from 'components/common/form/PasswordInput'
import ButtonAffirmative from 'components/common/button/ButtonAffirmative'
import emailValidators, { emailErrorMsgs } from 'components/forms/validators/email'
import styles from './FormStyles'

const LoginForm = props => {
  return (
    <Form
      hideNativeErrors
      model='login'
      onSubmit={inputs => console.log(inputs)}
    >
      <EmailInput
        autoFocus
        controlProps={{
          id: 'login.email',
          label: 'Email',
          required: true
        }}
        errorMsgs={emailErrorMsgs}
        model='login.email'
        validateOn='blur'
        validators={emailValidators}
      />

      <PasswordInput
        id='login.password'
        label='Password'
        model='login.password'
      />

      <Control.button
        component={ButtonAffirmative}
        model='login'
      >
      Log In
      </Control.button>

    </Form>
  )
}

export default LoginForm
