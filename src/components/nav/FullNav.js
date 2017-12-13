import React from 'react'
import { connect } from 'react-redux'
import { navViewLarge } from './NavbarStyles'
import { renderFullNavbar } from './utils'

const FullNav = ({ fullNavbar }) => {
  return (
    <div className={navViewLarge}>
      {renderFullNavbar(fullNavbar)}
    </div>
  )
}

const mapState = ({ fullNavbar }) => ({ fullNavbar })
export default connect(mapState)(FullNav)
