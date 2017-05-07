import React from 'react';
import { Link } from 'react-router-dom'

class FileUploadBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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
    var fileList = this.props.fileList;

    return (
      <div>
      {fileList.map((file) =>
        <div className={`${file}`} key={`${file}-file`}>
          <input className="upload-file" placeholder={"Please find your " + `${file}` + ".."} disabled="disabled" />
          <label>Choose a file
            <input className="upload-button" type="file" onChange={this.handleInputChange}/>
          </label>
        </div>
       )}
      </div>
    );
  }
}

export default FileUploadBox;
