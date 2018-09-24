import { createSelector } from 'reselect'

const allIdsSelector = state => state.products.allIds
const byIdSelector = state => state.products.byId

export const productsSelector = createSelector(
  allIdsSelector,
  byIdSelector,
  (allIds, productsById) => allIds.map(id => productsById[id])
)
