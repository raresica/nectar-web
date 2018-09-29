import { createSelector } from 'reselect'


const addedItems = (state) => state.cart.addedItems
const total = (state) => state.cart.total

export const cartSelector = createSelector(
    [addedItems,total],
    (addedItems,total) => [addedItems,total]
)
