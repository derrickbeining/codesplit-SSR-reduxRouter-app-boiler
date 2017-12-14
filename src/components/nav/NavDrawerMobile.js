import React from 'react'
import { connect } from 'react-redux'
import {
  active,
  navDrawer,
  navDrawerMobile,
  navDrawerContainer,
  navDrawerItem
} from './NavDrawerStyles'

const NavDrawerMobile = ({ navDrawerMobileOpen }) => {
  const maybeActiveClass = navDrawerMobileOpen ? active : ''
  return (
    <nav className={`${navDrawer} ${navDrawerMobile} ${maybeActiveClass}`}>
      <ul className={navDrawerContainer}>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
        <li className={navDrawerItem}>
          Item 1
        </li>
      </ul>
    </nav>
  )
}

const mapState = ({ navDrawerMobileOpen }) => ({ navDrawerMobileOpen })
export default connect(mapState)(NavDrawerMobile)
