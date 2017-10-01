import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Greeting extends Component {
  constructor(props){
    super(props)

    this.toggleGreeting = this.toggleGreeting.bind(this);
  }

  toggleGreeting(){
    const { logout, currentUser } = this.props;

    if(currentUser){
      return (
        <div className='logged-in-greeting'>
          <h3>Welcome back, {currentUser.username}</h3>
          <div>
            <button className='logout-button'
              onClick={logout}>Logout</button>
          </div>
        </div>
      )
    } else {
      return (
        <div className='signup-login'>
          <Link to='/signup'>Signup</Link>
          <Link to='/login'>Login</Link>
        </div>
      )
    }
  }

  render () {
    const { logout, currentUser } = this.props;

    return (
      <div>
        <span>
          {this.toggleGreeting()}
        </span>
      </div>
    )
  }
}

export default Greeting;
