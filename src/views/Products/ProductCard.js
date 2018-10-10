import React from 'react'
import {
  withStyles,
  ListItem,
  IconButton,
  Typography,
  ListItemText,
  ListItemSecondaryAction,
  Badge
} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'

class ProductCard extends React.Component {
  render() {
    const {
      classes,

      onAdd,

      id,
      title,
      description,
      price
    } = this.props

    return (
      <ListItem
        dense
        button
        // onClick={openProductPage(id)}
        className={classes.root}
      >
        <img className={classes.image} alt={title} src="https://picsum.photos/800/400?image=999" />
        <div className={classes.primaryInfo}>
          <Typography noWrap variant="subtitle2">
            {title || 'Nameless'}
          </Typography>
          <Typography noWrap variant="caption">
            {description || 'Indescribable'}
          </Typography>
          <Typography noWrap variant="subtitle2" color="primary">
            {price || 'Priceless'}
          </Typography>
        </div>
        {/* Has to be the last one to not trigger a click on the ListItem */}
        <ListItemSecondaryAction className={classes.actions}>
          <IconButton onClick={onAdd}>
            <AddIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <RemoveIcon fontSize="small" />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}

const styles = theme => ({
  root: {
    paddingRight: 52,
    display: 'flex',
    alignItems: 'stretch',
    // backgroundColor: theme.palette.common.white
    backgroundColor: theme.palette.grey[50]
  },
  primaryInfo: {
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  image: {
    marginRight: 8,
    objectFit: 'cover',
    width: 80,
    height: 80
  },
  actions: {
    width: 44,

    [theme.breakpoints.up('sm')]: {
      right: 12
    }
  }
})

export default withStyles(styles)(ProductCard)
