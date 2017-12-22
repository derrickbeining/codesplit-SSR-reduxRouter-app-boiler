import React from 'react'
import { Form, Control } from 'react-redux-form'
import Errors, { isDirtyAndBlurred } from 'components/common/form/Errors'
import EmailInput from 'components/common/form/EmailInput'
import PasswordFieldset from 'components/common/form/PasswordFieldset'
import ButtonAffirmative from 'components/common/button/ButtonAffirmative'
import emailValidators, { emailErrorMsgs } from 'components/forms/validators/email'
import styles from './FormStyles'

const SignupForm = props => {
  return (
    <Form
      model='signup'
      hideNativeErrors
      validators={{
        '': {
          passwordsMatch: vals => vals.password === vals.confirmPassword
        }
      }}
      onSubmit={inputs => console.log(inputs)}
    >
      <EmailInput
        autoFocus
        controlProps={{
          id: 'signup.email',
          label: 'Email',
          required: true
        }}
        errorMsgs={emailErrorMsgs}
        model='signup.email'
        validators={emailValidators}
      />

      <PasswordFieldset model='signup' />

      <Errors
        messages={{
          passwordsMatch: 'Passwords do not match'
        }}
        model='signup'
        show={isDirtyAndBlurred}
      />

      <Control.button
        component={ButtonAffirmative}
        model='signin'
      >
      Sign In
      </Control.button>

    </Form>
  )
}

export default SignupForm
