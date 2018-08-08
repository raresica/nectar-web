let nextItemId = 0

export const addItem = (name, price) => ({
  type: 'ADD_ITEM',
  id: nextItemId++,
  name,
  price
})
