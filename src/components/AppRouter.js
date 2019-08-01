import React from 'react'
import { Switch, Route } from 'react-router-dom';
// import WelcomePage from './WelcomePage';
// import { Link } from "react-router-dom";
import SignUp from './SignUp';
import Posts from './Posts';
import Login from './Login.js';
import FeedA from './FeedA.js';


export default function AppRouter() {
  return <div className="app-router">
    
    
      <Switch>
        
          <Route path='/signup' component={SignUp} />
          <Route path='/posts' component={Posts} />
          <Route path = '/login' component = {Login}/>
          <Route path = '/feeda' component = {FeedA}/>
          
          {/* <Route component={WelcomePage} /> */}
        
      </Switch>
      
    
    
  </div>

}
