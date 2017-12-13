import React from 'react'
import { connect } from 'react-redux'
import hideNavOnScroll from './hideNavOnScroll'
import CompactNav from './CompactNav'
import FullNav from './FullNav'
import {
  navbar,
  navContainerInner,
  navbarSpacer,
  hideNav,
  showNav
} from './NavbarStyles'

const Navbar = ({ show }) => {
  const visibilityClass = show ? showNav : hideNav

  return (
    <div>

      <nav className={`${navbar} ${visibilityClass}`}>

        <ul className={navContainerInner}>
          <CompactNav />
          <FullNav />
        </ul>
      </nav>

      <div className={navbarSpacer} />

    </div>
  )
}


const mapState = ({ compactNavbar }) => ({ compactNavbar })
export default connect(mapState)(hideNavOnScroll(Navbar))

