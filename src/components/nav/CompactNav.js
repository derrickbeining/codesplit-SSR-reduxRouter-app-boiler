import React from 'react'
import { connect } from 'react-redux'
import Link from 'redux-first-router-link'
import { toggleNavDrawerMobile } from 'actions/navDrawerActions'
import {
  active,
  burgerIcon,
  burgerWrapper,
  navBrand,
  navViewCompact
} from './NavbarStyles'

const CompactNav = ({ navDrawerOpen, toggleNavDrawerMobile }) => {
  const maybeActiveClass = navDrawerOpen ? active : ''
  return (
    <div className={navViewCompact}>

      <Link exact to='/'>BRAND</Link>

      <div className={`${burgerWrapper} ${maybeActiveClass}`}>
        <div className={burgerIcon} onClick={toggleNavDrawerMobile} />
      </div>

    </div>
  )
}

const mapState = ({ navDrawerOpen }) => ({ navDrawerOpen })
export default connect(mapState, { toggleNavDrawerMobile })(CompactNav)
