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
    var inputBox = event.target.name;
    var file = event.target.files[0].name
    var fileType = event.target.files[0].type.split('/')[1]

    if (fileType == "pdf" || fileType ==  "jpeg" || fileType == "png") {
      document.querySelector("#" + inputBox + "-name").value = file
    } else {
      document.querySelector("#" + inputBox + "-name").value = "Please select file type with pdf, jpeg or png"
    }
  }

  uploadFile(event) {
    event.preventDefault();
  }

  render() {
    var fileList = this.props.fileList;

    return (
      <div>
      {fileList.map((file) =>
        <div key={`${file}-file`}>
          <input type="checkbox" name={`${file}`}/>
          <input id={`${file}`+"-name"} className="file-upload-name" name={`${file}`} placeholder={`${file.toUpperCase()}`} disabled="disabled" />
          <label className="upload-label">Choose a file
            <input id={`${file}`+"-file"} name={`${file}`} className="file-upload-input" type="file" onChange={this.handleInputChange}/>
          </label>
        </div>
       )}
      </div>
    );
  }
}

export default FileUploadBox;
