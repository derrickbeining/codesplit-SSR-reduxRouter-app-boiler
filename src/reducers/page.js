import { NOT_FOUND } from 'redux-first-router'

export default (state = 'HOME', action = {}) => components[action.type] || state

const components = {
  // HOME: 'Home',
  HOMEPAGE: 'HomePage',
  LOGINPAGE: 'LoginPage',
  SIGNUPPAGE: 'SignupPage',
  // LIST: 'List',
  // VIDEO: 'Video',
  // ADMIN: 'Admin',
  // LOGIN: 'Login',
  ABOUTPAGE: 'AboutPage',
  FEATURESPAGE: 'FeaturesPage',
  SUPPORTPAGE: 'SupportPage',
  BLOGPAGE: 'BlogPage',
  [NOT_FOUND]: 'NotFound'
}

// NOTES: this is the primary reducer demonstrating how RFR replaces the need
// for React Router's <Route /> component.
//
// ALSO:  Forget a switch, use a hash table for perf.
