import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import hideNavOnScroll from 'components/nav/HOCs/hideNavOnScroll'
import CompactNav from './CompactNav'
import FullNav from './FullNav'
import NavbarSpacer from './NavbarSpacer'
import {
  navbar,
  hideNav,
  showNav
} from './NavbarStyles'

const Navbar = ({ show }) => {
  const visibilityClass = show ? showNav : hideNav

  return (
    <Fragment>
      <nav className={`${navbar} ${visibilityClass}`}>
        <CompactNav />
        <FullNav />
      </nav>

      <NavbarSpacer />

    </Fragment>
  )
}

const mapState = ({ compactNavbar }) => ({ compactNavbar })
export default connect(mapState)(hideNavOnScroll(Navbar))
