import { createSelector } from 'reselect'

export default createSelector(
  [
    state => state.location.type,
    state => state.location.routesMap
  ],
  (type, routesMap) => routesMap[type].title
)
