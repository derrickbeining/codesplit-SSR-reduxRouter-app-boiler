import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'redux-first-router-link'
import hideNavOnScroll from './hideNavOnScroll'
import {
  activeNavLink,
  navbar,
  navContainerInner,
  navbarSpacer,
  navItem,
  hideNav,
  showNav,
  navItemGroupLeft,
  navItemGroupMiddle,
  navItemGroupRight,
  navViewLarge,
  navViewCompact,
  selectionIndicator
} from './NavbarStyles'

const Navbar = ({ show, navContents }) => {
  const visibilityClass = show ? showNav : hideNav

  return (
    <div>

      <nav className={`${navbar} ${visibilityClass}`}>
        <div className={navViewCompact}>
          <ul className={navContainerInner}>
            {renderNavContents(navContents)}
          </ul>
        </div>
        <div className={navViewLarge}>
          <ul className={navContainerInner}>
            {renderNavContents(navContents)}
            {/* <div className={navItemGroupLeft}>
            <li className={navItem}>
              <NavLink activeClassName={activeNavLink} exact to='/'>BUDGE</NavLink>
              <div className={selectionIndicator} />
            </li>
          </div>
          <div className={navItemGroupMiddle}>
            <li className={navItem}>
              <NavLink activeClassName={activeNavLink} to='/how-it-works'>
                  How It Works
              </NavLink>
              <div className={selectionIndicator} />
            </li>
            <li className={navItem}>
              <NavLink activeClassName={activeNavLink} to='/find-savings'>
                  Find Savings
              </NavLink>
              <div className={selectionIndicator} />
            </li>
            <li className={navItem}>
              <NavLink activeClassName={activeNavLink} to='/support'>
                  Support
              </NavLink>
              <div className={selectionIndicator} />
            </li>
            <li className={navItem}>
              <NavLink activeClassName={activeNavLink} to='/blog'>
                  Blog
              </NavLink>
              <div className={selectionIndicator} />
            </li>
          </div>
          <div className={navItemGroupRight}>
            <li className={navItem}>
              <NavLink activeClassName={activeNavLink} to='/login'>
                  Log In
              </NavLink>
              <div className={selectionIndicator} />
            </li>
            <li className={navItem}>
              <NavLink activeClassName={activeNavLink} to='/signup'>
                  Sign Up
              </NavLink>
              <div className={selectionIndicator} />
            </li>
          </div> */}
          </ul>
        </div>
      </nav>

      <div className={navbarSpacer} />

    </div>
  )
}

const styleByGroup = {
  left: navItemGroupLeft,
  middle: navItemGroupMiddle,
  right: navItemGroupRight
}

const reduceToGroups = list => {
  return list.reduce((groups, { group, ...currItem }) => {
    if (groups[group]) groups[group].push(currItem)
    else groups[group] = [currItem]
    return groups
  }, {})
}

const renderItem = ({ path, content }) => (
  <li key={path} className={navItem}>
    <NavLink activeClassName={activeNavLink} exact to={path}>
      {content}
    </NavLink>
    <div className={selectionIndicator} />
  </li>
)
const renderGroup = (name, contents) => (
  <div key={name} className={styleByGroup[name]}>
    {contents.map(renderItem)}
  </div>)

const renderNavContents = contents => {
  const groupedContents = reduceToGroups(contents)
  return Object.keys(groupedContents).map(groupName => {
    return renderGroup(groupName, groupedContents[groupName])
  })
}

const mapState = ({ navContents }) => ({ navContents })
export default connect(mapState)(hideNavOnScroll(Navbar))

