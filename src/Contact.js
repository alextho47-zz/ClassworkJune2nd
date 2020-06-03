import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";

class Contact extends Component {
  render() {
    return (
      <div className="card">
        <p>
          <strong>Name:</strong> {this.props.name}
        </p>
        <p>Email: {this.props.email}</p>
        <p>Phone: {this.props.phone}</p>
      </div>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Contact;