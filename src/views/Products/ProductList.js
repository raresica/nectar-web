import React from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import ListSubheader from '@material-ui/core/ListSubheader'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'

const ProductList = ({ products, addProductToCart }) => (
  <GridList cellHeight={180}>
    <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
      <ListSubheader component="div">Products</ListSubheader>
    </GridListTile>
    {
      products.map(product => (
        <GridListTile key={product.id}>
          <img src="https://picsum.photos/300/300?image=999" alt={product.name}></img>
          <GridListTileBar
            title={product.title}
            subtitle={<span>${product.price}</span>}
            actionIcon={
              <IconButton>
                <AddIcon onClick={()=>{
                  addProductToCart(product)
                }} color='primary' />
              </IconButton>
            }
          />
        </GridListTile>
      ))
    }
  </GridList>
)

export default ProductList
