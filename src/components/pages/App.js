import React from 'react'
import { connect } from 'react-redux'
import Navbar from 'components/nav/Navbar'
import NavDrawer from 'components/nav/NavDrawer'
import Blur from 'components/common/Blur'
// import Sidebar from 'components/Sidebar'
import Switcher from 'components/Switcher'
import styles from './AppStyles'

const mapState = ({ navDrawerOpen }) => ({ active: navDrawerOpen })
const BlurOnNavDrawerOpen = connect(mapState)(Blur)

export default () => (
  <div className={styles.appContainer_0}>
    <Navbar />
    <div className={styles.appContainer_1}>
      <NavDrawer />
      <main className={styles.appContainer_2}>
        <BlurOnNavDrawerOpen>
          <Switcher />
        </BlurOnNavDrawerOpen>
      </main>
    </div>
  </div>
)
