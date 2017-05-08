import React from 'react';
import { Link } from 'react-router-dom'
import DocUploadForm from './DocUploadForm.jsx';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      address: '',
      passportNumber: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value
    const name = target.name;

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
          <div className="submit-form">
          <Link to={`/upload/${this.state.data}`} >
            <input type="submit" value="Submit" />
          </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
