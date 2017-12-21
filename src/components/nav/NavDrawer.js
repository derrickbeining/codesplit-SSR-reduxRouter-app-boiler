import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'redux-first-router-link'
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

const NavDrawer = ({ navDrawerOpen, fullNavbar }) => {
  const navProps = {
    id: 'navDrawer',
    className: `${navDrawer} ${navDrawerOpen ? active : ''}`,
    tabIndex: navDrawerOpen ? 0 : -1
  }
  return (
    <nav {...navProps}>
      <NavDrawerCloseButton />
      <NavbarSpacer />
      <ul className={navDrawerContainer}>
        <ul className={`${navDrawerContainer} ${navbarContentsHolder}`}>
          {fullNavbar.map(route => (
            <li key={route.actionType} className={navDrawerItem}>
              <NavLink
                exact
                to={{ type: route.actionType }}
                activeClassName={activeNavLink}
              >
                {route.content}
              </NavLink>
            </li>
          ))}
        </ul>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
        <li className={navDrawerItem}>Item 1</li>
      </ul>
    </nav>
  )
}

const mapState = ({ navDrawerOpen, fullNavbar }) => ({
  navDrawerOpen,
  fullNavbar
})
export default connect(mapState)(NavDrawer)
