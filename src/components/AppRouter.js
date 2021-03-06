import React from 'react'
import { Switch, Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
// import { Link } from "react-router-dom";
import SignUp from './SignUp';
import ProtectedRoute from '../components/PrivatedRoute'

import Login from './Login';
import Posts from './Posts'



export default function AppRouter() {
  return <div className="app-router">
    
    
      
      <Switch>
        
          <Route path='/signup' component={SignUp} />


          <Route path='/login' component={Login} />


          <ProtectedRoute path='/posts' component={Posts} />
          
          <Route exact path='/' component={WelcomePage} />
        
      </Switch>
      
    
    
  </div>

}
