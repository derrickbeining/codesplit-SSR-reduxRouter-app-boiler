import React from 'react'
import { Form } from 'react-redux-form'
import EmailInput from 'components/common/form/EmailInput'
import PasswordInput from 'components/common/form/PasswordInput'
import {
  isRequired,
  isEmail,
  lengthIsInRange,
  passwordsMatch
} from './validators'
import styles from './FormStyles'

const LoginForm = props => {
  return (
    <Form
      model='login'
      // hideNativeErrors
      validators={{
        email: {
          isRequired,
          isEmail,
          lengthIsInRange: lengthIsInRange(5, 100)
        }
        // password:{{

        // }}
      }}
      onSubmit={inputs => console.log(inputs)}
    >
      <EmailInput
        autoFocus
        controlProps={{
          id: 'login.email',
          label: 'Email',
          required: true
        }}
        model='login.email'
        validateOn='blur'
      />

      <PasswordInput
        id='login.password'
        label='Password'
        model='login.password'
      />

      <PasswordInput
        id='login.confirmPassword'
        label='Confirm Password'
        model='login.confirmPassword'
      />

      {/* <Control.button /> */}

    </Form>
  )
}

export default LoginForm
