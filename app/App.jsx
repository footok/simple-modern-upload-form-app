import React from 'react';
import Header from './components/Header.jsx';
import SignUpForm from './components/SignUpForm.jsx';
import { Link } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <SignUpForm/>
      </div>
    );
  }
}

export default App;
