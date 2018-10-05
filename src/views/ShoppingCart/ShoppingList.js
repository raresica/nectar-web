import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import ImageIcon from '@material-ui/icons/Image'
import WorkIcon from '@material-ui/icons/Work'
import BeachAccessIcon from '@material-ui/icons/BeachAccess'
import Button from '@material-ui/core/Button'

// const AddedItem = {
//   name: String,
//   price: Number,
//   quantity: Number
// }

const ShoppingList = ({ addedItems,total,increment,decrement }) => {
  return (
    <div>
      <List>
        {
          addedItems.map(item => {
            return (
              <ListItem>
                <Avatar>
                  <ImageIcon />
                </Avatar>
                <ListItemText primary={item.name} secondary={item.price} />
                <h1>Quantity: {item.quantity}</h1>
                <button onClick={()=> increment(item)}>+</button>
                <button onClick={()=> decrement(item)}>-</button>
              </ListItem>
            )
          }
          )
        }
      </List>

      <p>suck dick</p>
      <h2>Total: {total}</h2>
      <Button>Checkout</Button>
    </div>
  );
}


export default ShoppingList