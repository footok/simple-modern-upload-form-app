import React from 'react';
import { Link } from 'react-router-dom'
import DocUploadForm from './DocUploadForm.jsx';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      address: '',
      passportNumber: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value
    const name = target.name;

    const detail = this.state.data;
    detail[name] = value;

    this.setState({
      [name]: value,
      data: detail,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="signup-form">
        <form className="user-details" onSubmit={this.handleSubmit}>
          <h1 className="signup-header">Sign up</h1>
          <div className="first-name">
            <input name="firstName" type="text" placeholder="First name" value={this.state.firstName} onChange={this.handleInputChange}/>
          </div>
          <div className="last-name">
            <input name="lastName" type="text" placeholder="Last name" value={this.state.lastName} onChange={this.handleInputChange} />
          </div>
          <div className="date-of-birth">
            <input name="dateOfBirth" type="text" placeholder="Date of Birth" value={this.state.dateOfBirth} onChange={this.handleInputChange} />
          </div>
          <div className="address">
            <input name="address" type="text" placeholder="Address" value={this.state.address} onChange={this.handleInputChange} />
          </div>
          <div className="passport-number">
            <input name="passportNumber" type="text" placeholder="Passport Number"  value={this.state.passportNumber} onChange={this.handleInputChange} />
          </div>
          <div className="submit-form">
          <Link to={`/upload/${this.state.test}`} >
            <input type="submit" value="Submit" />
          </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
