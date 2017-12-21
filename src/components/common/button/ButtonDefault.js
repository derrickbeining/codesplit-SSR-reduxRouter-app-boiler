import React from 'react'
import { btnDefault } from './ButtonDefaultStyles'

export default ({ children, ...props }) => {
  return (
    <button {...props}>
      {children}
    </button>
  )
}
