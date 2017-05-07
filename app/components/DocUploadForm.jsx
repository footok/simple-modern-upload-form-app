import React from 'react';
import { Link } from 'react-router-dom'
import FileUploadBox from './FileUploadBox.jsx';

class DocUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: ['lease', 'driver license', 'passport', 
        'foreign passport', 'utility bill', 'rent receipt'
      ],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }

  handleInputChange(event) {
    var file = event.target.files[0].name
    document.querySelector(".upload-file").value = file
  }

  uploadFile(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="signup-form">
        <form className="user-details" onSubmit={this.uploadFile}>
          <FileUploadBox fileList={this.state.fileList} />
          <div className="submit-form">
            <Link to="/complete">
              <input type="submit" value="Submit" />
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default DocUploadForm;
