import React from "react";
import "./LoginForm.css";
import {Link} from "react-router-dom";

class LoginForm4Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identifer: "",
      password: "",
      errors: {},
      isLoading: false
    };
  }
  render() {
    return (
      <form className="mt-5 p-4">
        <div className="form-group resize">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" onChange={this.props.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email" value={this.props.email}/>
          <p className="m-2 colorFont">{this.props.errorfield.email}</p>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group resize my-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" onChange={this.props.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={this.props.password} />
          <p className="m-2 colorFont">{this.props.errorfield.password}</p>
        </div>
        <div className="move my-3">
          <button onClick={this.props.handleSubmit} type="submit" disabled={this.props.submit} className="btn btn-primary" onSubmit={this.props.handleSubmit}>Submit</button>
        </div>
      </form>

    )
  }
}
export default LoginForm4Account;
