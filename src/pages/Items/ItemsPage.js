import React from 'react'

class ItemsPage extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault()
    const name = event.target['name'].value
    const price = event.target['price'].value
    console.log(name, price)
  }

  render () {
    return (
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
    )
  }
}


export default ItemsPage
