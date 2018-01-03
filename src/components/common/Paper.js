import * as React from 'react'
import styles from './PaperStyles'

function Paper(props) {
  const {
    children,
    className = '',
    elevation = 1
  } = props
  return (
    <section
      className={`${styles.paper} ${className}`}
      data-elevation={elevation}
    >
      {children}
    </section>
  )
}


export default Paper
