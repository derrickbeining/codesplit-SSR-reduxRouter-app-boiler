import React from 'react'
import ButtonDefault from './ButtonDefault'
import { btnAffirmative } from './ButtonAffirmativeStyles'

export default ({ children, className, ...props }) => {
  return (
    <ButtonDefault className={`${btnAffirmative} ${className}`} {...props}>
      {children}
    </ButtonDefault>
  )
}
