import React from 'react';

class DocUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.uploadFile = this.uploadFile.bind(this);
  }

  uploadFile(event) {
    alert('A name was submitted: ' + this.state.lastName);
    event.preventDefault();
  }

  render() {
    return (
      <div className="signup-form">
        <form className="user-details" onSubmit={this.uploadFile}>
          <input name="file" type="file" placeholder="First name" value={this.state.firstName} onChange={this.handleInputChange}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default DocUploadForm;
