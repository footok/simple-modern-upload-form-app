import React from 'react';
import { Link } from 'react-router-dom'

class CompletePage extends React.Component {
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
    return (
      <div className="complete-page">
        <h1>Complete!</h1>
      </div>
    );
  }
}

export default CompletePage;
