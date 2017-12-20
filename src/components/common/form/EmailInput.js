import React from 'react'
import TextInput from './TextInput'

export default ({ type, ...props }) => {
  return (
    <TextInput type='email' {...props} />
  )
}
