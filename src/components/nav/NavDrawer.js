import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'redux-first-router-link'
import { toggleNavDrawer } from 'actions/navDrawerActions'
import NavbarSpacer from './NavbarSpacer'
import NavDrawerCloseButton from './NavDrawerCloseButton'
import {
  active,
  activeNavLink,
  navbarContentsHolder,
  navDrawer,
  navDrawerContainer,
  navDrawerItem
} from './NavDrawerStyles'

// for anything that needs to target the navDrawer, e.g. toggleNavDrawer action

const NavDrawer = ({ navDrawerOpen, fullNavbar, toggleDrawer }) => {
  const maybeActiveClass = navDrawerOpen ? active : ''
  return (
    <nav id='navDrawer' className={`${navDrawer} ${maybeActiveClass}`}>
      <NavDrawerCloseButton onClick={toggleDrawer} />
      <NavbarSpacer />
      <ul className={navDrawerContainer}>
        <ul className={`${navDrawerContainer} ${navbarContentsHolder}`}>
          {fullNavbar.map(item => (
            <li key={item.actionType} className={navDrawerItem}>
              <NavLink exact to={{ type: item.actionType }} activeClassName={activeNavLink}>
                {item.content}
              </NavLink>
            </li>
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
export default connect(mapState, { toggleDrawer: toggleNavDrawer })(NavDrawer)
