import { /* redirect, */ NOT_FOUND } from 'redux-first-router'
import {
  HOME_PAGE,
  LOGIN_PAGE,
  SIGNUP_PAGE,
  ABOUT_PAGE,
  FEATURES_PAGE,
  SUPPORT_PAGE,
  BLOG_PAGE
} from 'actions/routerActions'
// import { fetchData } from './utils'

// the keys on the routesMap must match the keys on the `page` reducer

export default {
  [HOME_PAGE]: {
    path: '/',
    title: 'Home'
  },
  [LOGIN_PAGE]: {
    path: '/login',
    title: 'Login'
  },
  [SIGNUP_PAGE]: {
    path: '/signup',
    title: 'Sign Up'
  },
  [ABOUT_PAGE]: {
    path: '/about',
    title: 'About'
  },
  [FEATURES_PAGE]: {
    path: '/features',
    title: 'Features'
  },
  [SUPPORT_PAGE]: {
    path: '/support',
    title: 'Support'
  },
  [BLOG_PAGE]: {
    path: '/blog',
    title: 'Blog'
  },
  [NOT_FOUND]: {
    path: '/not-found',
    title: 'Not Found'
  }

  // LIST: {
  //   path: '/list/:category',
  //   thunk: async (dispatch, getState) => {
  //     const {
  //       jwToken,
  //       location: { payload: { category } },
  //       videosByCategory
  //     } = getState()

  //     if (videosByCategory[category]) return
  //     const videos = await fetchData(`/api/videos/${category}`, jwToken)

  //     if (videos.length === 0) {
  //       return dispatch({ type: NOT_FOUND })
  //     }

  //     dispatch({ type: 'VIDEOS_FETCHED', payload: { videos, category } })
  //   }
  // },
  // VIDEO: {
  //   path: '/video/:slug',
  //   thunk: async (dispatch, getState) => {
  //     // TASK FOR YOU. YES, YOU!
  //     //
  //     // visit a VIDEO page in the app, then refresh the page, then make
  //     // this work when visited directly by copying the LIST route above and
  //     // using fetchData(`/api/video/${slug}`) and by dispatching
  //     // the the corresponding action type which I'll leave up to you to find
  //     // in ../reducers/index.js :)
  //   }
  // },
  // PLAY: {
  //   path: '/video/:slug/play',
  //   thunk: (dispatch, getState) => {
  //     if (typeof window === 'undefined') {
  //       const { slug } = getState().location.payload
  //       const action = redirect({ type: 'VIDEO', payload: { slug } })

  //       dispatch(action)
  //     }
  //   }
  // },
  // LOGIN: '/login',
  // ADMIN: {
  //   path: '/admin', // TRY: visit this path or dispatch ADMIN
  //   role: 'admin' // + change jwToken to 'real' in server/index.js
  // }
}

// DON'T GO DOWN THERE!
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// |
// ▼

// ANSWER: videoRoute.thunk.body:
/* HURRAY! You found the answers on the back of the cereal box!

const { jwToken, location: { payload: { slug } } } = getState()
const video = await fetchData(`/api/video/${slug}`, jwToken)

if (!video) {
  return dispatch({ type: NOT_FOUND })
}

dispatch({ type: 'VIDEO_FOUND', payload: { slug, video } })
*/
