import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// class Greeting extends Component {
//   constructor(props){
//     super(props)
//
//     this.toggleGreeting = this.toggleGreeting.bind(this);
//   }
//
//   toggleGreeting(){
//     const { logout, currentUser } = this.props;
//
//     if(currentUser){
//       return (
//         <div className='logged-in-greeting'>
//           <h3>Welcome back, {currentUser.username}</h3>
//           <div>
//             <button className='logout-button'
//               onClick={logout}>Logout</button>
//           </div>
//         </div>
//       )
//     } else {
//       return (
//         <div className='signup-login'>
//           <Link to='/signup'>Signup</Link>
//           <Link to='/login'>Login</Link>
//         </div>
//       )
//     }
//   }
//
//   render () {
//     const { logout, currentUser } = this.props;
//
//     return (
//       <div>
//         <span>
//           {this.toggleGreeting()}
//         </span>
//       </div>
//     )
//   }
// }

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign up!</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
