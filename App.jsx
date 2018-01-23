import React from 'react';
import {connect } from 'react-redux';

import Home from './pages/Home';


class App extends React.Component {

   constructor(props){

      super( props);
   }
   render() {
      return (
         <div>
            <Home store={this.props} />
         </div>
      );
   }
}
export default App;