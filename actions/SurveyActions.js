
import axios from 'axios';

import * as SurveyAPI from '../api/SurveyAPI';
import * as actionTypes from './actionTypes';



export function  loadAllSurveys() {



	return (dispatch) =>{
		axios.get("http://localhost:9999/survey")
		.then((response) => {
			dispatch(loadAllSurveysSucess(response.data));
		}).catch(error => {
			console.log( 'error in fetch api data..' + error );
			console.log( error );
		});

	}
}


export function test2() {  
  return function(dispatch) {
    return SurveyAPI.getAllSurveys().then(surveys => {
      dispatch(loadAllSurveysSucess(surveys));
    }).catch(error => {
      throw(error);
    });
  };
}





export  function test() {

	const surveyList =  SurveyAPI.getAllSurveys();
	console.log( 'loadAllSurveys ..........' + SurveyAPI.getAllSurveys() );
	return (dispatch) =>{
		dispatch( loadAllSurveysSucess(  surveyList ))
	}
};

export  function loadAllSurveysSucess(surveyList){  

	return {type: actionTypes.LOAD_ALL_SURVEY_SUCCESS, payload:surveyList };

};



export  function createSurvey(survey){

	const result = SurveyAPI.newSurvey( survey);

	return (dispatch) =>{
		dispatch( createSurveySuccess(  result ));
	};
}



export  function createSurveySuccess(survey){  

	return {type: actionTypes.NEW_SURVEY_CREATED, survey };

};


export function initApplication(){
	return { type: actionTypes.INIT_APPLICATION };
}
