import React from 'react'
import { createUniversalPortal } from 'react-portal-universal'

export default ({ child$ren, domNodeQuerySelector }) => {
  return createUniversalPortal(child$ren, domNodeQuerySelector)
}
