import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {connect } from 'react-redux';


import SurveyForm from './SurveyForm'

import * as GloblActions from '../actions/GlobalActions';


@connect( (store) =>{

    return store;
  }
)
class Home extends Component {

	constructor(props){

      super( props);
    }

    componentWillMount(){

    	this.props.dispatch(GloblActions.loadingHomePage());

    }
    componentDidMount(){

    }
    componentWillUnMount(){

    }
	render() {
		return (
			<div>
				<h2>Home</h2>
			</div>


			);
	}
}
export default Home;