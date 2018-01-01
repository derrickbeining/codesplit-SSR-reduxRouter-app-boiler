import * as React from 'react'
import {
  mainSection,
  sidebarAttachment,
  sidebarSection
} from './SidebarAttachmentStyles'

function SidebarAttachment({ children }) {
  return (
    <div className={sidebarAttachment}>
      <section className={sidebarSection}>
        <nav>
        Content
        </nav>
      </section>
      <main className={mainSection}>
        {children}
      </main>
    </div>
  )
}

// SidebarAttachment.defaultProps = {
//   Component: <nav>content</nav>
// }

export default SidebarAttachment
