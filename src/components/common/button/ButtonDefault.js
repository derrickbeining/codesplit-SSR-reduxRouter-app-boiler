import React from 'react'
import styles from './ButtonAffirmativeStyles'

export default ({ children, ...props }) => {
  return (
    <button className={styles.btnDefault}>
      {children}
    </button>
  )
}
