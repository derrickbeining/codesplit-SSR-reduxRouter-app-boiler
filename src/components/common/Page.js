import React from 'react'
import styles from './PageStyle'

const Page = ({ children }) => (
  <div className={styles.page}>
    {children}
  </div>
)

export default Page
