import React from 'react'
import Portal from 'components/common/util/Portal'

export default (child$ren, domNodeId) => (
  <Portal domNodeId={domNodeId}>
    {child$ren}
  </Portal>
)
