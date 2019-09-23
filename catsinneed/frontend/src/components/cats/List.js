import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllCats } from "../../actions/cats";


export class Cats extends Component {
  static propTypes = {
    cats: PropTypes.array.isRequired,
    getAllCats: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getAllCats();
  }

  render() {

    return (
      <Fragment>
        <center><h2>Cats looking for your sofa!</h2></center>  
        <hr></hr>   
          <div className='col-xs-12' MinHeight='800'>
            <div className = 'row'>
              {this.props.cats.map(cat => (            
                  <div key={cat.id} className='col-xs-3' >
                    {cat.picture !== "" ?
                    <div>
                      <img src={cat.picture} height='300px' width='auto'/>
                    </div>
                    : <div>
                        <img src="https://icon-library.net/images/no-image-icon/no-image-icon-5.jpg" height='300px' width='auto'/>
                      </div>
                    }
                    <div>
                      <ul>Name: {cat.name}</ul>
                      <ul>Rescuer email: {cat.email}</ul>
                      <ul>Description: {cat.message}</ul>
                    </div>                   
                  </div>  
              ))}           
           </div>             
         </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  cats: state.cats.cats,
});

export default connect(
  mapStateToProps,
  { getAllCats}
)(Cats);
