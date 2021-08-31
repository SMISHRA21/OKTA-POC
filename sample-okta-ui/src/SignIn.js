import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SignInForm from './SignInForm';
import { withOktaAuth } from '@okta/okta-react';




export default withOktaAuth(class SignIn extends Component {

   
  render() {
    if (!this.props.authState) {
      return <div>Loading...</div>;
    }
    else{
        if(this.props.authState['idToken']){
        console.log(this.props.authState);

       let req={'name':this.props.authState['idToken']['claims']['name'],
       'email': this.props.authState['idToken']['claims']['email'],
       'token':this.props.authState['accessToken']['accessToken']}

       const requestOptions = {
        method: 'POST',

        headers: {'X-XSRF-TOKEN': this.props.authState['accessToken']['accessToken'],'Content-Type':'application/json'},
        body: JSON.stringify(req)
    };
      
    
    fetch('http://localhost:8080/api/v1/users', requestOptions)
        .then(response => response.json()
        
        )
        
}
              
        
    
}


    return this.props.authState.isAuthenticated ?
      '' :
      <SignInForm />;
  }
});
