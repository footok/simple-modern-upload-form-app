import React from 'react';
import { Link } from 'react-router-dom'
import FileUploadBox from './common/FileUploadBox.jsx';
import UserDetails from './common/UserDetails.jsx';

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
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
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
    var citizen = this.state.citizen;

    if(citizen) {
      var fileUploadBox = <FileUploadBox fileList={this.state.citizenFileList} />
    } else {
      var fileUploadBox = <FileUploadBox fileList={this.state.foreignerFileList} />
    }

    return (
      <div className="file-upload-form">
        <UserDetails params={params}/>
        <form className="user-details-form" onSubmit={this.uploadFile}>
          <div className="radio-button">
            <b>Are you citizen?</b>
            <input checked={citizen} className="yes-button" type="radio" name="citizen" value="yes" onChange={this.handleOptionChange}/>Yes
            <input className="no-button" type="radio" name="citizen" value="no" onChange={this.handleOptionChange}/>No
          </div>
          {fileUploadBox}
        </form>
      </div>
    );
  }
}

export default DocUploadForm;
