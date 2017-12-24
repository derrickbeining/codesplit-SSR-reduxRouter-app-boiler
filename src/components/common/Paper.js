// @flow

import * as React from 'react'
import styles from './PaperStyles'

type Props = {
  children: React.Node,
  className?: string,
  elevation?: number
}

function Paper({ children, className, elevation }: Props) {
  const extraClassName: string = className || ''
  return (
    <section
      className={`${styles.paper} ${extraClassName}`}
      data-elevation={elevation}
    >
      {children}
    </section>
  )
}

Paper.defaultProps = {
  className: '',
  elevation: 1
}

export default Paper
