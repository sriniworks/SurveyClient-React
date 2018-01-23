import React from 'react';
import {connect } from 'react-redux';


class Survey extends React.Component {

	constructor(props){
		super(props);
	}

	componentDidMount() {

	}

	render() {
		const {survey} = this.props;
		return (
			<li key={survey.id.toString()}> {survey.surveyName}</li>
		)
	}
}
export default Survey;