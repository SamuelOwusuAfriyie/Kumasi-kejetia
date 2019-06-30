import React from "react";
import "./ServiceDetails.css";

class ServiceDetails extends React.Component {
  render() {
    return(
      <div className="container mt-5">
        <h1 className="text-center">Welcome to Kejetia Service Portal</h1>
          <div className="det">
            <div className="det1">
              <div className="d-flex">
              <label><b>Name:</b></label>
              <input type="text" placeholder="type your name" className="form-control ml-3 w-75"/>
              </div>
              <div className="d-flex mt-3">
              <label><b>Business Name:</b></label>
              <input type="text" placeholder="business name" className="form-control ml-2 w-75"/>
            </div>
            <div className="d-flex mt-3">
              <label><b>Phone number:</b></label>
              <input type="number" placeholder="phone number" className="form-control ml-2 w-75"/>
            </div>
            <div className="d-flex mt-3">
              <label><b>Email:</b></label>
              <input type="text" placeholder="email" className="form-control ml-3 w-75"/>
            </div>
            <div className="d-flex mt-3">
              <label><b>Address:</b></label>
              <input type="text" placeholder="address" className="form-control ml-3 w-75"/>
            </div>
            <div className="d-flex mt-3">
              <label><b>Website:</b></label>
              <input type="text" placeholder=" www.johnpaintwork.com" className="form-control ml-3 w-75"/>
            </div>
            <div className="d-flex mt-3">
              <label><b>Hours:</b> </label>
              <input type="text" placeholder="Monday to Friday 8 am to 5pm" className="form-control ml-3 w-75"/>
            </div>
            <div className="d-flex mt-3">
              <label><b>Images Relating to Business:</b> </label>
              <input type="file" placeholder="Monday to Friday 8 am to 5pm" className="form-control ml-1 w-50"/>
            </div>
            </div>
            <div className="det2 ml-5">
            <b>  <p>Type your "business Bio" below</p></b>
              <div>
                <textarea  rows="7" cols="50" maxlength="500"> </textarea>
              </div>
            </div>
          </div>
          <button className="btn btn-info w-50 mt-5 bmove">Submit</button>
        <div className="offer mt-5 ">
          <div className="d-flex mt-5">
          <p><b>Service Offer 1:</b></p>
          <div className="offer1 ml-5"></div>
        </div>
        <div className="d-flex mt-5">
          <p><b>Service Offer 2:</b></p>
          <div className="offer2 ml-5"></div>
        </div>
        <div className="d-flex mt-5">
          <p><b>Service Offer 3:</b></p>
          <div className="offer3 ml-5"></div>
        </div>
        <div className="d-flex mt-5">
          <p><b>Service Offer 4:</b></p>
          <div className="offer4 ml-5"></div>
        </div>
        <div className="d-flex mt-5">
          <p><b>Service Offer 5:</b></p>
          <div className="offer5 ml-5"></div>
        </div>
        </div>
      </div>
    )
  }
}
export default ServiceDetails;
