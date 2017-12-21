import React from 'react'
import ButtonDefault from './ButtonDefault'
import { btnNegative } from './ButtonNegativeStyles'

export default ({ children, className, ...props }) => {
  return (
    <ButtonDefault className={`${btnNegative} ${className}`} {...props}>
      {children}
    </ButtonDefault>
  )
}
