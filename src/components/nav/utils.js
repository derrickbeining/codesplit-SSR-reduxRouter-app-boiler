import React from 'react'
import { NavLink } from 'redux-first-router-link'
import {
  activeNavLink,
  navItem,
  navItemGroupLeft,
  navItemGroupMiddle,
  navItemGroupRight,
  selectionIndicator
} from './NavbarStyles'

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

export const renderFullNavbar = contents => {
  const groupedContents = reduceToGroups(contents)
  return Object.keys(groupedContents).map(groupName => {
    return renderGroup(groupName, groupedContents[groupName])
  })
}
