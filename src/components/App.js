import React from 'react';
import '../App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import MemberDet from './MemberDet'


import JSON from '../TestJSON.json'

class App extends React.Component{

  render(){
    return(
      <BrowserRouter>
      <div className="maincontainer">
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/:id" component={MemberDet}></Route>
      </div>
      </BrowserRouter>

    );
  }
}

export default App;
