import React from "react";
import SellOptions from "./SellOptions.js";
import Welcome from './../Welcome'
import {authorized} from './../../actions/index.js';
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class SellOptionsContainer extends React.Component {
  componentDidMount(){
    this.props.authorized();
  }
  render() {
    if(this.props.auth === 'Unauthorized')return <Redirect to='/Welcome'/>
    if (this.props.match.params === {}) {
      // return this.props.history.push('/Welcome')
      return(
        <div>
          <Welcome/>
        </div>
      )
    } else if (this.props.match.params !== {} || this.props.match.params !== undefined) {
      return (
        <div>
          <SellOptions id={this.props.match.params._id}/>
        </div>
      )
    }
  }
}

const mapStateToProps = (state)=>{
console.log(state);
const Auth  = state.auth.Auth;
const massage = Auth? Auth.massage:null
return{
auth:massage
}

}

export default connect(mapStateToProps , {authorized})(SellOptionsContainer);
