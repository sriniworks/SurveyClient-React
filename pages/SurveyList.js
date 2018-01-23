import React from 'react';
import {connect } from 'react-redux';

import Survey from './Survey';

@connect( (store) =>{

  return {
   surveyList: store.surveyList.surveyList
 };
})
class SurveyList extends React.Component {


 constructor(props){
  super(props);

}

render() {
  const surveys = this.props.surveyList;
  return (
    <div>

      <h1>My Survey List</h1>

      <ul>
        {surveys.map( ( s, i ) => 
          <li key={s.id}> {s.surveyName}</li>
        )} 
      </ul>

    </div>
    );
  }
}
export default SurveyList;