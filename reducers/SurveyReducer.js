
import * as actionTypes from '../actions/actionTypes';  
import initialState from './initialState';


export function surveyListReducer(state = initialState.surveyList, action){

	switch( action.type ){

		case actionTypes.LOAD_ALL_SURVEY_SUCCESS:

			return{
				...state,
				surveyList:action.payload
				
			}
			
		default :
			return state;

	}
}
export function surveyReducer(state = initialState.survey, action){  

	switch(action.type) {

		default :
			return state;

	}

}

