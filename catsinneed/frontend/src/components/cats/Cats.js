import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCats, deleteCat } from "../../actions/cats";

export class Cats extends Component {
  static propTypes = {
    cats: PropTypes.array.isRequired,
    getCats: PropTypes.func.isRequired,
    deleteCat: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getCats();
  }

  render() {
    return (
      <Fragment>
        <h2>Cats</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Picture</th>
              <th>Name</th>
              <th>Rescuer Email</th>
              <th>Description</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.cats.map(cat => (
              <tr key={cat.id}>
                <td>{cat.id}</td>
                <td><img src= {cat.picture} height='40px'/></td>
                <td>{cat.name}</td>
                <td>{cat.email}</td>
                <td>{cat.message}</td>
                <td>
                  <button
                    onClick={this.props.deleteCat.bind(this, cat.id)}
                    className="btn btn-danger btn-sm"
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  cats: state.cats.cats
});

export default connect(
  mapStateToProps,
  { getCats, deleteCat }
)(Cats);
