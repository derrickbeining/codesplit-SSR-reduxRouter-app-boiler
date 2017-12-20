import React from 'react'
import { Control, Form, actions } from 'react-redux-form'
import asyncGetZXCVBN from 'components/forms/HOCs/asyncGetZXCVBN'
import TextInput from 'components/common/form/TextInput'
import styles from './FormStyles'

const SignupForm = props => {
  console.log(props)
  return (
    <Form
      model='login'
      hideNativeErrors
      validators={{

      }}
      onSubmit={inputs => console.log(inputs)}
    >
      <Control.text
        autoFocus
        component={TextInput}
        id='login.email'
        label='Email'
        model='login.email'
        type='email'
        validateOn='blur'
        withFieldValue
      />

      <Control.text
        component={TextInput}
        id='login.password'
        label='Password'
        model='login.password'
        type='password'
      />

      <Control.text
        component={TextInput}
        id='login.confirmPassword'
        label='Confirm Password'
        model='login.confirmPassword'
        type='password'
      />

      {/* <Control.button /> */}

    </Form>
  )
}

export default asyncGetZXCVBN(SignupForm)
