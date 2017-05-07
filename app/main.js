import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import App from './App.jsx';
import SignUpForm from './components/SignUpForm.jsx';
import DocUploadForm from './components/DocUploadForm.jsx';
import CompletePage from './components/CompletePage.jsx';

//ReactDOM.render(<App />, document.getElementById('app'));
//
ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/upload" component={DocUploadForm}/>
      <Route exact path="/complete" component={CompletePage}/>
    </div>
  </Router>
), document.getElementById('app'));
