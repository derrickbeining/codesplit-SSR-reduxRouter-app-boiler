import React from 'react'
import { blur, isActive } from './BlurStyles'

export default ({ active, children }) => {
  const className = active ? `${blur} ${isActive}` : blur
  return (
    <div className={className}>
      {children}
    </div>
  )
}
