import React from 'react'
import styled from 'styled-components'

const List = styled.ol`
  padding: 0px;

  li + li {
    margin-top: ${props => props.theme.spacing}px;
  }
`

const Item = styled.li`
  background: papayawhip;
  display: flex;
  height: 96px;

  & > img {
    padding: ${props => props.theme.spacing}px;
    border-radius: 8px;
  }
`

const ItemContent = styled.div`
  flex: 1;
  justify-content: space-between;
  display: flex;
  flex-direction: column;

  padding: ${props => props.theme.spacing}px;
`

const ItemActions = styled.div`
  width: 64px;

  & > button {
    height: 100%;

    background: transparent;
    border: 0;
    padding: 0;
  }
`

const ItemList = ({ items }) => (
  <List>
    {
      items.map(item => (
        <Item key={item.id}>
          <img src="https://picsum.photos/80/80?image=999" alt=''></img>
          <ItemContent>
          <h6>{item.name}</h6>
          <p>${item.price}</p>
          </ItemContent>
          <ItemActions>
            <button>Add to cart</button>
          </ItemActions>
        </Item>
      ))
    }
  </List>
)

export default ItemList
