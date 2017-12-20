import React from 'react'
import { Control, Errors } from 'react-redux-form'
import {
  errorWrapper,
  invalid,
  textInputWrapper
} from './TextInputStyles'

const CustomTextInput = ({ label, id, withFieldValue, fieldValue = {}, ...props }) => {
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

export default ({ component, ...props }) => {
  return (
    <div>
      <Control.text
        component={CustomTextInput}
        withFieldValue
        {...props}
      />
      {props.errorMessages && (
        <Errors
          component='li'
          model={props.model}
          messages={props.errorMessages}
          show={whenTouchedAndBlurred}
          wrapper={customErrorWrapper}
        />)}
    </div>
  )
}

const whenTouchedAndBlurred = field => field.touched && !field.focus
const customErrorWrapper = props => <ul className={errorWrapper}>{props.children}</ul>
