import React from 'react'
import { Control } from 'react-redux-form'
import Errors, { isDirtyAndBlurred } from './Errors'
import {
  invalid,
  textInputWrapper
} from './TextInputStyles'

const CustomTextInput = ({
  errorMsgs,
  id,
  label,
  fieldValue = {},
  withFieldValue,
  ...props
}) => {
  const { valid, pristine } = fieldValue
  const validityClass = !pristine && !valid ? invalid : ''
  return (
    <div className={textInputWrapper}>
      <input id={id} className={validityClass} {...props} />
      <label htmlFor={id}>{label}</label>
      <hr />
      <hr />
    </div>
  )
}

export default ({ component, mapProps, ...props }) => {
  return (
    <div className={textInputWrapper}>
      <Control.text
        component={CustomTextInput}
        mapProps={{ model: props => props.model, ...mapProps }}
        withFieldValue
        {...props}
      />

      <Errors
        model={props.model}
        messages={props.errorMsgs}
        show={isDirtyAndBlurred}
      />
    </div>
  )
}
