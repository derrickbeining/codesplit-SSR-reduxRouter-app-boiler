import React from 'react'
import { modalOuter, modalInner } from './ModalStyles'

export default ({ children, show }) => {
  return (
    <div className={modalOuter}>
      <div className={modalInner}>
        {children}
      </div>
    </div>
  )
}
