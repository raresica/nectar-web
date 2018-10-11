import React from 'react'
import { List } from '@material-ui/core'
import ProductCard from './ProductCard'

const ProductList = ({ products, onProductAdd }) => (
  <List>
    {products.map(product => (
      <ProductCard
        key={product.id}
        {...product}
        onAdd={() => onProductAdd(product.id)}
        // onRemove={removeProductFromCart}
      />
    ))}
  </List>
)

export default ProductList
