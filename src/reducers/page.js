import { NOT_FOUND } from 'redux-first-router'
import {
  HOME_PAGE,
  LOGIN_PAGE,
  SIGNUP_PAGE,
  ABOUT_PAGE,
  FEATURES_PAGE,
  SUPPORT_PAGE,
  BLOG_PAGE
} from 'actions/routerActions'

export default (state = 'HOME', action = {}) => components[action.type] || state

// BE SURE THE KEYS HERE MATCH THE KEYS ON THE ROUTESMAP
// The values need to match the filename corresponding to
// the component to be rendered
const components = {
  // HOME: 'Home',
  [HOME_PAGE]: 'HomePage',
  [LOGIN_PAGE]: 'LoginPage',
  [SIGNUP_PAGE]: 'SignupPage',
  // LIST: 'List',
  // VIDEO: 'Video',
  // ADMIN: 'Admin',
  // LOGIN: 'Login',
  [ABOUT_PAGE]: 'AboutPage',
  [FEATURES_PAGE]: 'FeaturesPage',
  [SUPPORT_PAGE]: 'SupportPage',
  [BLOG_PAGE]: 'BlogPage',
  [NOT_FOUND]: 'NotFound'
}

// NOTES: this is the primary reducer demonstrating how RFR replaces the need
// for React Router's <Route /> component.
// ALSO:  Forget a switch, use a hash table for perf.
