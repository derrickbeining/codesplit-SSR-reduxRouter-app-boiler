import React from 'react'
import { Errors } from 'react-redux-form'
import { errorWrapper } from './ErrorsStyles'

// Prop Types: http://davidkpiano.github.io/react-redux-form/docs/api/Errors.html
export default props => {
  return (
    <Errors
      component='div'
      wrapper={customErrorWrapper}
      {...props}
    />
  )
}

const customErrorWrapper = props => <div className={errorWrapper}>{props.children}</div>
export const isDirtyAndBlurred = field => !field.focus && !field.pristine
export const passwordsAreDirtyAndBlurred = fields => {
  return [fields.password, fields.confirmPassword].every(isDirtyAndBlurred)
}

