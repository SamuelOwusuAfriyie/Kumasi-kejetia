import React from "react";
import "./ConfirmEmail4MyAccount.css";
import {Link} from "react-router-dom";

class ConfirmEmail4MyAccount extends React.Component {
  render() {
    return(
      <div className="jumbotron">
        <div className="cccenter">
        <h1>Confirm Email</h1>
        <p>check your email for confirmation code</p>
        <input name="confirmCode" value={this.props.confirmCode} onChange={this.props.handleChange} type="text" />
      <button className="btn btn-danger" onClick={this.props.handleSubmit} >Submit</button>
      </div>
    </div>
    )
  }
}
export default ConfirmEmail4MyAccount;
