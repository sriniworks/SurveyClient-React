
import * as actionTypes from '../actions/actionTypes';  
import initialState from './initialState';


export function userRedcuer(state = initialState.user, action){

	switch( action.type ){


		default :
		return state;

	}
}
export function sessionStateReducer(state = initialState.sessionState, action){  

	switch(action.type) {

		case actionTypes.INIT_APPLICATION:

		return{
			...state,
			initialLoadComplete : true
		}

		case actionTypes.LOAD_ALL_SURVEY_SUCCESS:

			return{
				...state,
				surveyListLoaded:true
				
		}
		default :
		return state;

	}

}

