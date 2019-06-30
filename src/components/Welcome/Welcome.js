import React from "react";
import "./Welcome.css";
import {Link} from "react-router-dom";


class Welcome extends React.Component {
  onNavigateLoginForm() {
  //  browserHistory.push("/LoginForm");
  }
render() {
  return (
    <div className="container container-fluid container-border my-5">
        <div className="row my-5">
          <div className="col-12 col-lg-6 col-md-6 right-faint d-none d-lg-block">
            <h1 className="title">Post an ad</h1>
            <p className="ad">Login to post your ad and keep track of it in your account.</p>
            <p className="ad"><span className="mr-3 "><img className="image" src="https://i.imgur.com/FV2jMMl.png" alt=""/></span>Start posting your ads.</p>
            <p className="ad"><span className="mr-3 "><img className="image" src="https://i.imgur.com/4pIE7GG.png" alt=""/></span>Mark ads as favorite and view them later.</p>
            <p className="ad"><span className="mr-3 "><img className="image" src="https://i.imgur.com/UX4ooNO.png" alt=""/></span>view and manage your ads at your convenience.</p>
          </div>
          <div className="col-12 col-lg-5 col-md-5 m-auto center">
            <button type="button" style={{color: '#fff'}} className="btn  fb"><span><img className="fb-log" src="https://i.imgur.com/9jF0MGg.png" alt=""/></span>Continue With Facebook</button>
            <p className="or">or</p>
            <button type="button" className="btn btn-success email">Sign up using email</button>
            <div className="row">
            <Link to={{ pathname: 'SignUpForm' }}><button className="sU my-2 btn btn-danger">Sign Up</button></Link>
          </div>
            <p className="terms">By singning up for an account you agree with <br/>our
             <span className="agreement"> terms and conditions.</span></p>
            <hr className="hr"/>
            <p className="Already-para">Already have an account</p>
            <Link to={{ pathname: '/LoginForm' }}><button type="button" className="btn btn-warning login-btn" onClick={this.onNavigateLoginForm} >Login</button></Link>
          </div>
        </div>
    </div>
)
}
}



export default Welcome;
