import {
  HOME_PAGE,
  LOGIN_PAGE,
  SIGNUP_PAGE,
  ABOUT_PAGE,
  FEATURES_PAGE,
  SUPPORT_PAGE,
  BLOG_PAGE
} from 'actions/routerActions'

const DEFAULT = [
  {
    path: '/',
    actionType: HOME_PAGE,
    content: 'BRAND',
    group: 'left'
  },
  {
    path: '/about',
    actionType: ABOUT_PAGE,
    content: 'About',
    group: 'middle'
  },
  {
    path: '/features',
    actionType: FEATURES_PAGE,
    content: 'Features',
    group: 'middle'
  },
  {
    path: '/support',
    actionType: SUPPORT_PAGE,
    content: 'Support',
    group: 'middle'
  },
  {
    path: '/blog',
    actionType: BLOG_PAGE,
    content: 'Blog',
    group: 'middle'
  },
  {
    path: '/login',
    actionType: LOGIN_PAGE,
    content: 'Log In',
    group: 'right'
  },
  {
    path: '/signup',
    actionType: SIGNUP_PAGE,
    content: 'Sign Up',
    group: 'right'
  }
]

export default (state = DEFAULT, action) => {
  switch (action.type) {
    default:
      return state
  }
}
