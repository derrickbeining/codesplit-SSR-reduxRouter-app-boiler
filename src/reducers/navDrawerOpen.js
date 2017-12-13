import { TOGGLE_NAV_DRAWER } from 'actions/navDrawerActions'

export default (state = false, { type }) => {
  return type === TOGGLE_NAV_DRAWER ? !state : state
}
