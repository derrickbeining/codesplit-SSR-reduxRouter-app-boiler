import React from 'react'
import Navbar from 'components/nav/Navbar'
import Sidebar from 'components/Sidebar'
import Switcher from 'components/Switcher'
import styles from 'styles/App'

export default () => (

  <div className={`${styles.app}`}>
    <Navbar />
    <Switcher />
  </div>)
