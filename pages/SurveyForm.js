

import React from 'react';
import axios from 'axios';
import {connect } from 'react-redux';




import initialState from '../reducers/initialState';
import  * as SurveyActions  from  '../actions/SurveyActions';
import SurveyList from './SurveyList';

@connect( (store) =>{

  return  {

      survey: store.survey,
      surveyList:store.surveyList,
      session:store.session,
      user:store.user

  }
})
class SurveyForm extends React.Component {


  constructor( props ){
    super( props);
    this.submitHandler = this.submitHandler.bind(this);

  }

  componentWillMount(){
    const {  survey,surveyList , session,  user } = this.props
    if( !session.surveyListLoaded){
      this.props.dispatch(SurveyActions.loadAllSurveys())
    }else{
      console.log( 'skip list loading... ');
    }

  }


  componentDidMount() {

  }

  componentWillUnmount() {
    
  }

  submitHandler(e) { 
    e.preventDefault();

    const formData = new FormData(e.target);
    for (let entry of formData.entries()) {
     survey[entry[0]] = entry[1]
    }

    this.props.dispatch( SurveyActions.createSurvey( survey));
  }

  render() {

    const {  survey,surveyList , session,  user } = this.props
    const surveyListIsEmpty = surveyList.length == 0
    const loadingString = "Loading....";

    return (
        <div>
        <form onSubmit={this.submitHandler}>
        <label> 
        Survey Name : <input name="surveyName" type="text" value={survey.surveyName} onChange={this.changeHandler}/> 
        </label>
        <label>
        Survey type: 
        <input name="surveyType" type="radio" value ="Social" onChange={this.changeHandler}/>  Social
        <input name="surveyType" type="radio" value ="Private" onChange={this.changeHandler}/>  Private

        </label>  

        <input type="submit" value ="submit"/>    


        </form>

        <h1> 
          <div>
              {surveyListIsEmpty ? loadingString :

                <SurveyList/>
              }

          </div>
        </h1>


        </div>
    );
  }
}
export default SurveyForm;