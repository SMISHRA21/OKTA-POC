import React, { Component , useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withOktaAuth } from '@okta/okta-react';



export default withOktaAuth(class Home extends Component {


  render() {
    if (!this.props.authState) {
      return <div>Loading...</div>;
      
    }

    
    const name =  this.props.authState.isAuthenticated ? this.props.authState['idToken']['claims']['name']:"";
    const email = this.props.authState.isAuthenticated ? this.props.authState['idToken']['claims']['email']:"";
    const button = this.props.authState.isAuthenticated ?
      <button onClick={() => {this.props.oktaAuth.signOut()}}>Logout</button> :
      <button onClick={() => {this.props.history.push('/login')}}>Login</button>;

    return (
      <div>
     
<div>{name}</div> 

<div>{email}</div> 

       
        {button}
      </div>
    );
  }
});
