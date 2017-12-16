import React from 'react'
import { connect } from 'react-redux'
import { toggleNavDrawer } from 'actions/navDrawerActions'
import NavDrawerCloseButton from './NavDrawerCloseButton'
import {
  active,
  navbarContentsHolder,
  navDrawer,
  navDrawerContainer,
  navDrawerItem
} from './NavDrawerStyles'

const NavDrawer = ({ navDrawerOpen, fullNavbar, toggleNavDrawer }) => {
  const maybeActiveClass = navDrawerOpen ? active : ''
  return (
    <nav className={`${navDrawer} ${maybeActiveClass}`}>
      <NavDrawerCloseButton onClick={toggleNavDrawer} />
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
export default connect(mapState, { toggleNavDrawer })(NavDrawer)
