import React from 'react'
import { connect } from 'react-redux'
import { TransitionGroup, Transition } from 'transition-group'
import universal from 'react-universal-component'
import Page from 'components/common/Page'
import toggleNavDrawer from 'actions/navDrawerActions'
import Loading from './Loading'
import Err from './Error'
import isLoading from '../selectors/isLoading'
import styles from './SwitcherStyles'

const UniversalComponent = universal(({ page }) => import(`./pages/${page}`), {
  alwaysDelay: true,
  minDelay: 2000,
  loadingTransition: true,
  loading: Loading,
  error: Err
})

const Switcher = ({
  page, direction, isLoading, toggleNavDrawer
}) => (
  <TransitionGroup
    component='div'
    className={`${styles.switcher} ${direction}`}
    // delay={0}
    // duration={350}
    leaveDelay={0}
    leaveDuration={350}
    // appearDelay={351}
    // appearDuration={350}
    enterDelay={isLoading ? 0 : 351}
    enterDuration={isLoading ? 1500 : 350}
    prefix='fade'
  >
    <Transition key={page}>
      <Page>
        <UniversalComponent page={page} isLoading={isLoading} />
      </Page>
    </Transition>
  </TransitionGroup>
)

const mapState = ({ page, direction, ...state }) => ({
  page,
  direction,
  isLoading: isLoading(state)
})

export default connect(mapState, { toggleNavDrawer })(Switcher)
