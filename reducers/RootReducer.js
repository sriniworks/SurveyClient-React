
import {combineReducers} from 'redux';

import { surveyListReducer, surveyReducer } from './SurveyReducer';
import { userRedcuer, sessionStateReducer } from './ApplicationReducer';


const rootReducer = combineReducers(
		{
			surveyList:surveyListReducer, 
			survey:surveyReducer,
			user:userRedcuer,
			session:sessionStateReducer
		}
)

export default rootReducer;