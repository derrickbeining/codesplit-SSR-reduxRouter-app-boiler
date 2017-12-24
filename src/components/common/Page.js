import React from 'react'
import NavbarSpacer from 'components/nav/NavbarSpacer'
import styles from './PageStyles'

const Page = ({ children }) => (
  <div className={styles.page}>
    <NavbarSpacer />
    {children}
  </div>
)

export default Page
