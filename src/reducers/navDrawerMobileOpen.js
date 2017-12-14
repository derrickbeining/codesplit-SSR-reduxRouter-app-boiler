import { TOGGLE_NAV_DRAWER_MOBILE } from 'actions/navDrawerActions'

export default (state = false, { type }) => {
  return type === TOGGLE_NAV_DRAWER_MOBILE ? !state : state
}
