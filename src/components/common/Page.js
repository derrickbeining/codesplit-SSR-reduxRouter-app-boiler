import React from 'react'
import styles from './PageStyles'

const Page = ({ children }) => (
  <div className={styles.page}>
    {children}
  </div>
)

export default Page
