import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addCat } from "../../actions/cats";

export class Form extends Component {
  state = {
    name: "",
    email: "",
    message: "", 
    picture: ""
  };

  static propTypes = {
    addCat: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { name, email, message, picture } = this.state;
    const cat = { name, email, message, picture };
    this.props.addCat(cat);
    this.setState({
      name: "",
      email: "",
      message: "",
      picture:""
    });
  };

  render() {
    const { name, email, message, picture} = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Cat</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Picture (URL)</label>
            <input
              className="form-control"
              type="text"
              name="picture"
              onChange={this.onChange}
              value={picture}
            />
          </div>
          <div className="form-group">
            <label>Rescuer Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              type="text"
              name="message"
              onChange={this.onChange}
              value={message}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addCat }
)(Form);
