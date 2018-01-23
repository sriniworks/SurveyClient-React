import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {connect } from 'react-redux';

import SurveyForm from './SurveyForm';
import Login from './Login';
import Home from './Home.js';


class MenuItems extends Component {

   constructor( props){
      super (props );
   }

    componentWillMount(){

    }
    componentDidMount(){

    }
    componentWillUnMount(){

    }


   render() {
      return (
         <Router>
            <div>
               <ul>
                  <li><Link to={'/'}>Login</Link></li>
                  <li><Link to={'/dashboard'}>Home</Link></li>
                  <li><Link to={'/survey'}>My surveys</Link></li>

               </ul>
               <hr />
               
               <Switch>
                  <Route exact path='/' component={Login}/>
                  <Route exact path='/dashboard' component={Home} />
                  <Route exact path='/survey' component={SurveyForm} />                 

               </Switch>
            </div>
         </Router>
      );
   }
}
export default MenuItems;
