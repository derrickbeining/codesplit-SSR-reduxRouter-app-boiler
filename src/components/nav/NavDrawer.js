import React from 'react'
import { connect } from 'react-redux'
import {
  active,
  navbarContentsHolder,
  navDrawer,
  navDrawerFull,
  navDrawerContainer,
  navDrawerItem
} from './NavDrawerStyles'

const NavDrawer = ({ navDrawerOpen, fullNavbar }) => {
  const maybeActiveClass = navDrawerOpen ? active : ''
  return (
    <nav className={`${navDrawer} ${maybeActiveClass}`}>
      <ul className={navDrawerContainer}>
        <ul className={`${navDrawerContainer} ${navbarContentsHolder}`}>
          {fullNavbar.map(item => (
            <li key={item.path} className={navDrawerItem}>{item.content}</li>
        ))}
        </ul>
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

const mapState = ({ navDrawerOpen, fullNavbar }) => ({ navDrawerOpen, fullNavbar })
export default connect(mapState)(NavDrawer)
