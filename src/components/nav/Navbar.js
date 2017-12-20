import React from 'react'
import { connect } from 'react-redux'
import hideNavOnScroll from 'components/nav/HOCs/hideNavOnScroll'
import CompactNav from './CompactNav'
import FullNav from './FullNav'
import {
  navbar,
  navbarContainerInner,
  hideNav,
  showNav
} from './NavbarStyles'

const Navbar = ({ show }) => {
  const visibilityClass = show ? showNav : hideNav

  return (
    <nav className={`${navbar} ${visibilityClass}`}>
      <ul className={navbarContainerInner}>
        <CompactNav />
        <FullNav />
      </ul>
    </nav>
  )
}

const mapState = ({ compactNavbar }) => ({ compactNavbar })
export default connect(mapState)(hideNavOnScroll(Navbar))
