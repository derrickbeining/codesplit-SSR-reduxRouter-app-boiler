import React from 'react'
import { connect } from 'react-redux'
import {
  active,
  navDrawer,
  navDrawerFull,
  navDrawerContainer,
  navDrawerItem
} from './NavDrawerStyles'

const NavDrawer = ({ navDrawerOpen }) => {
  const maybeActiveClass = navDrawerOpen ? active : active
  return (
    <nav className={`${navDrawer} ${navDrawerFull} ${maybeActiveClass}`}>
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

const mapState = ({ navDrawerOpen }) => ({ navDrawerOpen })
export default connect(mapState)(NavDrawer)
