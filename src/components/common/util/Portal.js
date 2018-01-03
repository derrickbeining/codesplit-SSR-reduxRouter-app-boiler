import React from 'react'

export default ({ child$ren, domNodeQuerySelector }) => {
  return React.createPortal(
    child$ren,
    document.querySelector(domNodeQuerySelector)
  )
}
