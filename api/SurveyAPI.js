
import axios from 'axios';

export function  getAllSurveys() {

	axios.get("http://localhost:9999/survey")
	.then((response) => {
		console.log( 'getAllSurveys API.... ..........' + response.data);
		return response.data;
	}).catch(error => {
		console.log( 'error in fetch api data..' );
		console.log( error );
	})

	;
}


export function newSurvey(survey){

	axios.post('http://localhost:9999/survey/', survey , {
		headers:{ 'Content-Type': 'application/json' }
	} )
	.then((response) => {
		return response.data;
	});


}

export function updateSurvey(survey){

	axios.put('http://localhost:9999/survey/'+survey.id , survey , {
		headers:{ 'Content-Type': 'application/json' }
	} )
	.then((response) => {
		return response.data;
	});


}


export function deleteSurvey(survey){

	axios.delete('http://localhost:9999/survey/'+survey.id , survey , {
		headers:{ 'Content-Type': 'application/json' }
	} )
	.then((response) => {
		return response.data;
	});


}	
