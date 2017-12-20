import { NOT_FOUND } from 'redux-first-router'

export const HOME_PAGE = 'HOME_PAGE'
export const LOGIN_PAGE = 'LOGIN_PAGE'
export const SIGNUP_PAGE = 'SIGNUP_PAGE'
export const ABOUT_PAGE = 'ABOUT_PAGE'
export const FEATURES_PAGE = 'FEATURES_PAGE'
export const SUPPORT_PAGE = 'SUPPORT_PAGE'
export const BLOG_PAGE = 'BLOG_PAGE'

// try dispatching these from the redux devTools

export const goToHomePage = () => ({
  type: HOME_PAGE
})

export const goToLoginPage = () => ({
  type: LOGIN_PAGE
})

export const goToSignupPage = () => ({
  type: SIGNUP_PAGE
})

export const goToAboutPage = () => ({
  type: ABOUT_PAGE
})

export const goToFeaturesPage = () => ({
  type: FEATURES_PAGE
})

export const goToSupportPage = () => ({
  type: SUPPORT_PAGE
})

export const goToBlogPage = () => ({
  type: BLOG_PAGE
})

export const goToPage = (type, category) => ({
  type,
  payload: category && { category }
})

export const goHome = () => ({
  type: 'HOME'
})

export const goToAdmin = () => ({
  type: 'ADMIN'
})

export const notFound = () => ({
  type: NOT_FOUND
})

export const visitCategory = category => ({
  type: 'LIST',
  payload: { category }
})

export const visitVideo = slug => ({
  type: 'VIDEO',
  payload: { slug }
})
