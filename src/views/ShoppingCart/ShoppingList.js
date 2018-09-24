import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';

// const AddedItem = {
//   name: String,
//   price: Number,
//   quantity: Number
// }

const addedItems=[{name: "curdecal", price: 10, quantity: 1},
{name:"vomadestrumf", price:15, quantity: 2}]


function ShoppingList() {
  const total = ()=> {
    addedItems.forEach(item => {
      total+= item.price * item.quantity;
    })};

  return (
    <List>
    addedItems.forEach( item => {
        <ListItem>
        <Avatar>
          <ImageIcon />
        </Avatar>
        <ListItemText primary={item.name} secondary={item.price} />
        <h1>Quantity: {item.quantity}</h1>
      </ListItem>
    });
      
      <h2>Total: {total}</h2>
        
        <Button>Checkout</Button>
      </List>
    
  );
}


export default withStyles(styles)(ShoppingList);