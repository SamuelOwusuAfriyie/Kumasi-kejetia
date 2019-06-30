import React from "react";
import Navbar from "./Navbar.js";
import {Link,withRouter} from "react-router-dom";
import {authorized,logout} from './../../actions/index.js'
import {connect} from 'react-redux'

class NavbarContainer extends React.Component {
  constructor(){
    super();
    this.logout = this.logout.bind(this);
  }
  componentDidMount(){
    this.props.authorized()
  }
  logout(){
    console.log('yyyyyyyyyyyy');
  return  this.props.logout()
  }
  render(){

    return (
      <div>
        <Navbar authMessage={this.props.authMessage} logout={this.logout} authData={this.props.authData}  mainNav =  {this.props.mainNav}/>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  console.log(state);
  const Auth  = state.auth.Auth;
  const message = Auth? Auth.message:null
  const data = Auth?Auth.data:null
    console.log('message',message );
  return{
  authMessage:message,
  authData:data
  }
}
export default connect(mapStateToProps,{authorized,logout})(withRouter(NavbarContainer));
