import React from 'react'
import { Switch, Route } from 'react-router-dom';
// import WelcomePage from './WelcomePage';
// import { Link } from "react-router-dom";
import SignUp from './SignUp.js';
import Posts from './Posts.js';
import Login from './Login.js';


export default function AppRouter() {
  return <div className="app-router">
    
    
      <Switch>
        
          <Route path='/signup' component={SignUp} />
          <Route path='/posts' component={Posts} />
          <Route path='/' component={Login} />
          
          {/* <Route component={WelcomePage} /> */}
        
      </Switch>
      
    
    
  </div>

}
