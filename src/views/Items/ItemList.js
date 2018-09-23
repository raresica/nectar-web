import React from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import ListSubheader from '@material-ui/core/ListSubheader'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'

const ItemList = ({ items }) => (
  <GridList cellHeight={180}>
    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
      <ListSubheader component="div">Products</ListSubheader>
    </GridListTile>
    {
      items.map(item => (
        <GridListTile key={item.id}>
          <img src="https://picsum.photos/300/300?image=999" alt={item.name}></img>
          <GridListTileBar
            title={item.name}
            subtitle={<span>${item.price}</span>}
            actionIcon={
              <IconButton>
                <AddIcon color='primary' />
              </IconButton>
            }
          />
        </GridListTile>
      ))
    }
  </GridList>
)

export default ItemList
