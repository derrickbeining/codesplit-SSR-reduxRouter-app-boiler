import React from 'react'
import {
  closeDrawerButton,
  closeDrawerButtonContainer,
  closeDrawerButtonPositioner
} from './NavDrawerStyles'

export default ({ onClick }) => {
  return (
    <div className={closeDrawerButtonContainer}>
      <div className={closeDrawerButtonPositioner} onClick={onClick}>
        <div className={closeDrawerButton} />
      </div>
    </div>
  )
}
