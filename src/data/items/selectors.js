import { createSelector } from 'reselect'

const allIdsSelector = state => state.items.allIds
const byIdSelector = state => state.items.byId

export const itemsSelector = createSelector(
  allIdsSelector,
  byIdSelector,
  (allIds, itemsById) => allIds.map(id => itemsById[id])
)
