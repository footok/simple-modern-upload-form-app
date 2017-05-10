import React from 'react';
import { Link } from 'react-router-dom'
import DocUploadForm from './DocUploadForm.jsx';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      address: '',
      passportNumber: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value
    const name = target.name;
    let formValid = false;
    var firstName = document.querySelector("input[name=firstName]").value;
    var lastName = document.querySelector("input[name=lastName]").value;
    var dateOfBirth = document.querySelector("input[name=dateOfBirth]").value;
    var address = document.querySelector("input[name=address]").value;
    var passportNumber = document.querySelector("input[name=passportNumber]").value;

    // Check if all the inputs are filled
    if (firstName && lastName && dateOfBirth && address && passportNumber) {
      formValid = true;
    } else {
      formValid = false;
    }

    this.enableButton(formValid);

    this.setState({
      [name]: value,
    });
  }

  handleBlur(event) {
    const target = event.target;
    const index = event.target.id;
    const detail = this.state.data;
    const value = target.value
    const name = target.name;
    detail[index] = value;

    this.setState({
      [name]: value,
      data: detail,
    });
  }

  enableButton(valid) {
    var button = document.querySelector("input[type=submit")
    if (valid) {
      button.removeAttribute("disabled");
    } else {
      button.disabled = true;
    }
  }

  handleSubmit(event) {
    var target = event.target;
    var detail = this.state.data;
    for (var i = 0; i < 5; i++) {
      var inputValue = target[i].value;
      detail.push(inputValue);
    }

    this.setState({
      data: detail,
    });

    event.preventDefault();
  }

  render() {
    return (
      <div className="signup-form">
        <form className="user-details" onSubmit={this.handleSubmit}>
          <h1 className="signup-header">Sign up</h1>
          <div className="first-name">
            <input id='0' name="firstName" type="text" placeholder="First name" value={this.state.firstName} onChange={this.handleInputChange} onBlur={this.handleBlur}/>
          </div>
          <div className="last-name">
            <input id='1' name="lastName" type="text" placeholder="Last name" value={this.state.lastName} onChange={this.handleInputChange} onBlur={this.handleBlur}/>
          </div>
          <div className="date-of-birth">
            <input id='2' name="dateOfBirth" type="text" placeholder="Date of Birth" value={this.state.dateOfBirth} onChange={this.handleInputChange} onBlur={this.handleBlur}/>
          </div>
          <div className="address">
            <input id='3' name="address" type="text" placeholder="Address" value={this.state.address} onChange={this.handleInputChange} onBlur={this.handleBlur}/>
          </div>
          <div className="passport-number">
            <input id='4' name="passportNumber" type="text" placeholder="Passport Number"  value={this.state.passportNumber} onChange={this.handleInputChange} onBlur={this.handleBlur}/>
          </div>
            <label className="signup-reminder">- Please upload files to proceed - </label>
          <div className="submit-form">
          <Link to={`/upload/${this.state.data}`} >
            <input type="submit" value="Next" disabled="true"/>
          </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
