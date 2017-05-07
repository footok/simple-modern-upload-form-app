import React from 'react';
import Header from './components/Header.jsx';
import SignUpForm from './components/SignUpForm.jsx';
import DocUploadForm from './components/DocUploadForm.jsx';
import { Link } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="sign-up-page">
        <SignUpForm/>
      </div>
    );
  }
}

export default App;
