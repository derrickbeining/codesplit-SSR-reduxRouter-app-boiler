import React from 'react'
import { connect } from 'react-redux'
import { toggleNavDrawer } from 'actions/navDrawerActions'
import {
  closeDrawerButton,
  closeDrawerButtonContainer,
  closeDrawerButtonPositioner
} from './NavDrawerStyles'

const NavDrawerCloseButton = ({ toggleNavDrawer }) => {
  return (
    <div className={closeDrawerButtonContainer}>
      <div className={closeDrawerButtonPositioner} onClick={toggleNavDrawer}>
        <div className={closeDrawerButton} />
      </div>
    </div>
  )
}

export default connect(null, { toggleNavDrawer })(NavDrawerCloseButton)
