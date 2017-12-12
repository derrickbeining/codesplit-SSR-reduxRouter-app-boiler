import React from 'react'
import { notFound } from '../styles/Switcher'

export default error =>
  (<div className={notFound}>
    ERROR: {error.message}
  </div>)
