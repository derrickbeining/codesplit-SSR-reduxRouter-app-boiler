export const TOGGLE_NAV_DRAWER = 'TOGGLE_NAV_DRAWER'
export const TOGGLE_NAV_DRAWER_MOBILE = 'TOGGLE_NAV_DRAWER_MOBILE'

export const toggleNavDrawer = () => {
  // server-side render protection, `document` is not defined:
  // try {
  // ensures navDrawer always opens at top
  setTimeout(() => {
    document.getElementById('navDrawer').scrollTop = 0
  }, 500)
  return {
    type: TOGGLE_NAV_DRAWER
  }
  // } catch (err) {
  //   console.warn(err)
  // }
}

export const toggleNavDrawerMobile = () => ({
  type: TOGGLE_NAV_DRAWER_MOBILE
})
