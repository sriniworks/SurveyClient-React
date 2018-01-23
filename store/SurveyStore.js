
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

import promise from 'redux-promise-middleware';
import logger from 'redux-logger';



import rootReducer from '../reducers/RootReducer';
import initialState from '../reducers/initialState'



const surveyStore = () => {

	return createStore(

			rootReducer,
			applyMiddleware( 
				thunk, 
				logger)

		);
}



export default surveyStore ;