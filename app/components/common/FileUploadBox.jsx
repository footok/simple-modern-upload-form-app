import React from 'react';
import { Link } from 'react-router-dom'

class FileUploadBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.enableButton = this.enableButton.bind(this);
  }

  componentDidUpdate(nextProps) {
    console.log('///', this.props);
    console.log('///', nextProps);
    this.enableButton();
  }

  handleInputChange(event) {
    var inputBox = event.target.name;
    var file = event.target.files[0].name
    var fileType = event.target.files[0].type.split('/')[1]

    if (fileType == "pdf" || fileType ==  "jpeg" || fileType == "png") {
      document.querySelector("#" + inputBox + "-name").value = file
    } else {
      document.querySelector("#" + inputBox + "-name").value = "Please select pdf, jpeg or png file"
      document.querySelector("#" + inputBox + "-file").value = ""
    }

    this.enableButton();
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

    this.enableButton();
  }

  enableButton() {
    var button = document.querySelector("input[type=submit")
    var inputBoxes = document.querySelectorAll("input[type=file]")
    var boxCount = 0;

    inputBoxes.forEach(function(box) {
      if (box.value) {
        boxCount++;
      } else {
        boxCount--;
      }
    })

    if (inputBoxes.length == boxCount ) {
      button.removeAttribute("disabled");
    } else {
      button.disabled = true;
    }

    return boxCount = 0;
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
        <div className="submit-docs">
          <Link to="/complete">
            <input className="submit-button" type="submit" value="Submit" disabled="true"/>
          </Link>
            <input className="delete-button" type="button" value="Delete files" onClick={this.handleDelete}/>
        </div>
      </div>
    );
  }
}

export default FileUploadBox;
