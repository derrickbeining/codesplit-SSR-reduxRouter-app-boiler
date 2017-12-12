const DEFAULT = [
  {
    path: '/',
    content: 'BRAND',
    group: 'left'
  },
  {
    path: '/about',
    content: 'About',
    group: 'middle'
  },
  {
    path: '/features',
    content: 'Features',
    group: 'middle'
  },
  {
    path: '/support',
    content: 'Support',
    group: 'middle'
  },
  {
    path: '/blog',
    content: 'Blog',
    group: 'middle'
  },
  {
    path: '/login',
    content: 'Log In',
    group: 'right'
  },
  {
    path: '/signup',
    content: 'Sign Up',
    group: 'right'
  }
]

export default (state = DEFAULT, action) => {
  switch (action.type) {
    default: return state
  }
}
