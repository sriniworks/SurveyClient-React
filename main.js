import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import {Provider} from 'react-redux';


import surveyStore from './store/SurveyStore';  
import App from './App.jsx';

import {initApplication} from './actions/SurveyActions';

import MenuItems from './pages/MenuItems'



const store =  surveyStore();
store.dispatch(initApplication());

ReactDOM.render((

		<Provider store={store}>
			<MenuItems store={store}/>
		</Provider>
     ),
     document.getElementById('app')
);