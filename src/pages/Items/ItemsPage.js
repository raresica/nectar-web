import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
//
import { initializeItems, addItem } from 'data/items/actions'
import { itemsSelector } from 'data/items/selectors'
import ItemList from 'displays/Items/ItemList'

class ItemsPage extends React.Component {
  componentDidMount () {
    this.props.initializeItems()
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const name = event.target['name'].value
    const price = event.target['price'].value
    this.props.addItem(name, price)
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>
            Name:
          <input name='name' />
          </label>
          <label htmlFor='price'>
            Price:
          <input type='number' name='price' />
          </label>
          <input type='submit' value='Submit' />
        </form>
        <ItemList items={this.props.items}/>
      </div>
    )
  }
}

const mapState = state => ({
  items: itemsSelector(state)
})

const mapDispatch = dispatch => bindActionCreators({ initializeItems, addItem }, dispatch)

export default connect(mapState, mapDispatch)(ItemsPage)
