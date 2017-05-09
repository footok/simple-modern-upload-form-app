import React from 'react';
import { Link } from 'react-router-dom'
import FileUploadBox from './FileUploadBox.jsx';

class DocUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      citizenFileList: ['lease', 'driver-license', 'passport'],
      foreignerFileList: ['lease', 'driver-license', 'foreign-passport',
                          'utility-bill', 'rent-receipt'],
      citizen: true,
      foreigner: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }

  handleInputChange(event) {
    var file = event.target.files[0].name
    document.querySelector(".upload-file").value = file
  }

  handleDelete(event) {
    const target = event.target;
    var uploadBox = document.querySelectorAll("#upload-file");
    var checkBox = document.querySelectorAll("input[type=checkbox]");

    checkBox.forEach(function(box) {
      if (box.checked) {
        var name = box.name;
        document.querySelector("#" + name + "-name").value = name.toUpperCase();
        document.querySelector("#" + name + "-file").value = "";
        box.checked = false;
      }
    })
  }

  handleOptionChange(event) {
    var citizenPassport = document.querySelector(".yes-button").checked;
    var foreignerPassport = document.querySelector(".no-button").checked;

    this.setState({
      citizen: citizenPassport,
      foreigner: foreignerPassport,
    });
  }

  uploadFile(event) {
    event.preventDefault();
  }

  render() {
    var params = this.props.match.params.value.split(',');
    var firstName = params[0];
    var lastName = params[1];
    var dateOfBirth = params[2];
    var address = params[3];
    var passportNumber = params[4];
    var citizen = this.state.citizen;

    if(citizen) {
      var fileUploadBox = <FileUploadBox fileList={this.state.citizenFileList} />
    } else {
      var fileUploadBox = <FileUploadBox fileList={this.state.foreignerFileList} />
    }

    return (
      <div className="file-upload-form">
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
        <form className="user-details-form" onSubmit={this.uploadFile}>
          <div className="radio-button">
            <b>Are you citizen?</b>
            <input checked={citizen} className="yes-button" type="radio" name="citizen" value="yes" onChange={this.handleOptionChange}/>Yes
            <input className="no-button" type="radio" name="citizen" value="no" onChange={this.handleOptionChange}/>No
          </div>
          {fileUploadBox}
          <div className="submit-docs">
            <Link to="/complete">
              <input className="submit-button" type="submit" value="Submit" />
            </Link>
              <input className="delete-button" type="button" value="Delete files" onClick={this.handleDelete}/>
          </div>
        </form>
      </div>
    );
  }
}

export default DocUploadForm;
