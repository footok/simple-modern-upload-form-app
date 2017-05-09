import React from 'react';

class UserDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    var params = this.props.params;
    var firstName = params[0];
    var lastName = params[1];
    var dateOfBirth = params[2];
    var address = params[3];
    var passportNumber = params[4];

    return (
      <div className="user-details">
        <h1>Hi {firstName} {lastName}</h1>
        <h2>Here are your details.</h2>
        <ul>
          <li>Date of birth   - {dateOfBirth}</li>
          <li>Address         - {address}</li>
          <li>Passport Number - {passportNumber}</li>
        </ul>
        <h2> Please upload required documents</h2>
      </div>
    );
  }
}

export default UserDetails;
