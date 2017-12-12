import React from 'react'
import { connect } from 'react-redux'
import { TransitionGroup, Transition } from 'transition-group'
import universal from 'react-universal-component'
import Page from 'components/common/Page'
import Loading from './Loading'
import Err from './Error'
import isLoading from '../selectors/isLoading'
import styles from '../styles/Switcher'

const UniversalComponent = universal(
  ({ page }) => import(`./pages/${page}`),
  {
    alwaysDelay: true,
    minDelay: 750,
    loadingTransition: false,
    loading: Loading,
    error: Err
  }
)

const Switcher = ({ page, direction, isLoading }) => (
  <TransitionGroup
    className={`${styles.switcher} ${direction}`}
    duration={500}
    prefix='fade'
  >
    <Transition key={page}>
      <Page>
        <UniversalComponent page={page} isLoading={isLoading} />
      </Page>
    </Transition>
  </TransitionGroup>)

const mapState = ({ page, direction, ...state }) => ({
  page,
  direction,
  isLoading: isLoading(state)
})

export default connect(mapState)(Switcher)
