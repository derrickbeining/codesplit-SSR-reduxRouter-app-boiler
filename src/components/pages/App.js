import React from 'react'
import Navbar from 'components/nav/Navbar'
import NavDrawer from 'components/nav/NavDrawer'
import NavDrawerMobile from 'components/nav/NavDrawerMobile'
import Sidebar from 'components/Sidebar'
import Switcher from 'components/Switcher'
import styles from './AppStyles'

export default () => (

  <div className={styles.appContainer_0}>
    <Navbar />
    <div className={styles.appContainer_1}>
      <NavDrawer />
      <NavDrawerMobile />
      <main>
        <Switcher />
      </main>
    </div>
  </div>)
