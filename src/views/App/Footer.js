import React from 'react'
import MuiBottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import HomeIcon from '@material-ui/icons/Home'
import UserIcon from '@material-ui/icons/AccountCircle'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ListIcon from '@material-ui/icons/List'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

const BottomNavigation = styled(MuiBottomNavigation)`
  && {
    background-color: ${props => props.theme.palette.white['200']};
  }
`

const FooterDiv = styled.div`
  position: fixed;
  bottom: 0;
  background-color: ${props => props.theme.palette.white['200']};
  width: 100%;
  text-align: center;
`

class Footer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentLocation: props.location.pathname
    }
  }

  handleChange = (event, value) => {
    this.props.history.push(value)
    this.setState({ currentLocation: value })
  }

  render () {
    const { currentLocation } = this.state

    return (
      <FooterDiv>
        Temporary bottom navigation to easy development
        <BottomNavigation value={currentLocation} onChange={this.handleChange} showLabels>
          <BottomNavigationAction label='Home' value='/' icon={<HomeIcon />} />
          <BottomNavigationAction label='Sign in' value='/users/sign-in' icon={<UserIcon />} />
          <BottomNavigationAction label='Sign up' value='/users/sign-up' icon={<UserIcon />} />
          <BottomNavigationAction label='About' value='/about' icon={<FavoriteIcon />} />
          <BottomNavigationAction label='Items' value='/items' icon={<ListIcon />} />
        </BottomNavigation>
      </FooterDiv>
    )
  }
}
export default withRouter(Footer)
