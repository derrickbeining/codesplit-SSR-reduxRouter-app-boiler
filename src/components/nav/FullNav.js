import React from 'react'
import { connect } from 'react-redux'
import { navbarContainerInner, navViewLarge } from './NavbarStyles'
import renderFullNavbar from './utils/renderFullNavbar'

const FullNav = ({ fullNavbar }) => {
  return (
    <div className={navViewLarge}>
      <ul className={navbarContainerInner}>
        {renderFullNavbar(fullNavbar)}
      </ul>
    </div>
  )
}

const mapState = ({ fullNavbar }) => ({ fullNavbar })
export default connect(mapState)(FullNav)
