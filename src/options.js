import { redirect } from 'redux-first-router'
import getPageTitle from 'selectors/getPageTitle'
import { toggleNavDrawer } from 'actions/navDrawerActions'
import { isAllowed, isServer } from './utils'

export default {
  title: getPageTitle,
  onBeforeChange: (dispatch, getState, action) => {
    const allowed = isAllowed(action.type, getState())

    if (!allowed) {
      const action = redirect({ type: 'LOGIN_PAGE' })
      return dispatch(action)
    }

    // any time we navigate to a new page, close the navDrawer
    if (getState().navDrawerOpen) {
      dispatch(toggleNavDrawer())
    }
  },

  onAfterChange: (dispatch, getState) => {
    const { type } = getState().location

    if (type === 'LOGIN' && !isServer) {
      setTimeout(() => {
        alert(alertMessage)
      }, 1500)
    }
  }
}

const alertMessage =
  "NICE, You're adventurous! Try changing the jwToken cookie from 'fake' to 'real' in server/index.js (and manually refresh) to access the Admin Panel. Then 'onBeforeChange' will let you in."
