import React from 'react'
import { connect } from 'react-redux'
import Link from 'redux-first-router-link'
import { toggleNavDrawer } from 'actions/navDrawerActions'
import {
  active,
  burgerIcon,
  burgerWrapper,
  navViewCompact
} from './NavbarStyles'

const CompactNav = ({ navDrawerOpen, toggleNavDrawer }) => {
  const maybeActiveClass = navDrawerOpen ? active : ''
  return (
    <div className={navViewCompact}>

      <Link exact to='/'>BRAND</Link>

      <div
        className={`${burgerWrapper} ${maybeActiveClass}`}
        onClick={toggleNavDrawer}
      >
        <div className={burgerIcon} />
      </div>

    </div>
  )
}

const mapState = ({ navDrawerOpen }) => ({ navDrawerOpen })
export default connect(mapState, { toggleNavDrawer })(CompactNav)
