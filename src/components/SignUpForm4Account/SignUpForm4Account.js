import React from "react";
import "./SignUpForm4Account.css";

class SignUpForm4Account extends React.Component {
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
      <div className="mC">
      <div className="jumbotron  mt-5 container w-100 d-flex mx-auto container-fluid">
        <form className="form-group m-auto">
          <div className="bS">
          <div className="row mt-4">
            <div className="col-12 col-md-6 col-lg-6 my-2">
              <label className=" mb-0  d-none d-lg-block">First Name</label>
              <input onChange={this.props.onChange} name="firstName" value={this.props.firstName} className="form-control" type="text" placeholder="First Name"/>
            </div>
            <div className="col-12 col-md-6 col-lg-6 my-2">
              <label className="mb-0 d-none d-lg-block">Surname</label>
              <input onChange={this.props.onChange} name="surName" value={this.props.surName} className="form-control" type="text" placeholder="Surname"/>
            </div>
          </div>
          <div className="w-100 col-12 my-2">
            <label className="mb-0 d-none d-lg-block">Email</label>
            <input onChange={this.props.onChange} name="email" value={this.props.email} type="text" placeholder="email " className="form-control w-100"/>
            <p className="m-2 colorFont">{this.props.errorfield.email}</p>
          </div>
          <div className="lik w-100 my-2">
              <label className="mb-0 d-none d-lg-block">City</label>
              <input onChange={this.props.onChange} name="city" value={this.props.city} type="text" placeholder="city" className="form-control w-100"/>
          </div>
          <div className="row ">
            <div className="col-12 col-md-6 col-lg-6 my-2">
              <label className="mb-0 d-none d-lg-block">Password</label>
              <input onChange={this.props.onChange} name="password" value={this.props.password} type="text" placeholder="Password" className="form-control"/>
            </div>
            <div className="col-12 col-md-6 col-lg-6 my-2">
              <label className="mb-0 d-none d-lg-block">Confirm Password</label>
              <input onChange={this.props.onChange} name="confirmPassword" value={this.props.confirmPassword} type="text" placeholder="Confirm Password" className="form-control"/>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <button onClick={this.props.handleSubmit} type="submit" disabled={this.props.submit} className="btn btn-danger mx-auto mt-5 ">Submit</button>
        </div>
        </form>
      </div>
    </div>
    )
  }
}
export default SignUpForm4Account;
