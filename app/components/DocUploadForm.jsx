import React from 'react';
import { Link } from 'react-router-dom'

class DocUploadForm extends React.Component {
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
      <div className="signup-form">
        <form className="user-details" onSubmit={this.uploadFile}>
          <div className="lease-file">
            <input className="upload-file" placeholder="Please find your lease.." disabled="disabled" />
            <label>Choose a file
            <input className="upload-button" type="file" onChange={this.handleInputChange}/>
            </label>
          </div>
          <div className="driver-license-file">
            <input className="upload-file" placeholder="Please find your driver license.." disabled="disabled" />
            <label>Choose a file
            <input className="upload-button" type="file" onChange={this.handleInputChange}/>
            </label>
          </div>
          <div className="passport-file">
            <input className="upload-file" placeholder="Please find your passport.." disabled="disabled" />
            <label>Choose a file
            <input className="upload-button" type="file" onChange={this.handleInputChange}/>
            </label>
          </div>
          <div className="foreign-passport-file">
            <input id="upload-lease" className="upload-file" placeholder="Please find your foreign passport.." disabled="disabled" />
            <label>Choose a file
            <input className="upload-button" type="file" onChange={this.handleInputChange}/>
            </label>
          </div>
          <div className="utility-bill-file">
            <input className="upload-file" placeholder="Please find your utility bill.." disabled="disabled" />
            <label>Choose a file
            <input className="upload-button" type="file" onChange={this.handleInputChange}/>
            </label>
          </div>
          <div className="rent-receipt-file">
            <input className="upload-file" placeholder="Please find your rent receipt.." disabled="disabled" />
            <label>Choose a file
            <input className="upload-button" type="file" onChange={this.handleInputChange}/>
            </label>
          </div>
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
