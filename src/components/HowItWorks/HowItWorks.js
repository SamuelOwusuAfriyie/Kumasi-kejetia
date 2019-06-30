import React from "react";
import "./HowItWorks.css";

class HowItWorks extends React.Component {
  render() {
    return(
      <div className="main-con">
      <div className="container bg-info text-light sec-con">
        <h1>Welcome to Kejetia Service Portal</h1>
        <p>The Kejetia Service Page allows handy-men and business owners create Business profiles and under these profiles create service offers. <br/>Potential clients will find you and contact you</p>
          <ul>
            <li>Sign up or log in to your Kejetia account</li>
              <li>From the Accounts Page create a Profile by filling in the details like below</li>
          </ul>
          <div className="eg">
            <div className="eg1">
              <p><b>Name:</b> John Doe</p>
              <p><b>Business Name:</b>  John Paint Works </p>
              <p><b>Phone number:</b> 0123456789</p>
              <p><b>Email:</b> johndoes@gmail.com</p>
              <p><b>Address:</b> 5566 Accra</p>
              <p><b>Address:</b> 5566 Accra</p>
              <p><b>Website:</b> www.johnpaintwork.com</p>
              <p><b>Hours:</b> Monday to Friday 8 am to 5pm</p>
            </div>
            <div className="eg2">
            <b>  <p>Type your "business Bio" below</p></b>
              <div className="bb ">
                <p className="mt-2 ml-2">Complete home and office painting services. <br/>We are available all year round.
                  We do creative wall arts,<br/> patterns and designs.</p>
              </div>
            </div>
          </div>
          <ul>
            <li>You may also create a service offer or a Gig like below, each business profile can have up to 5 live service offers</li>
          </ul>
          <p>Example; <br/> Service Offer: 3 bedroom house painting  ghc 500 , excludes paint and material cost , offer expires by May 5th.</p>
          <ul>
            <li>When you are  done, please click save
              Your Company Profile will go under the Business Profile Page
              Service offer will go under  Service offer Page </li>
          </ul>
      </div>
    </div>
    )
  }
}
export default HowItWorks;
