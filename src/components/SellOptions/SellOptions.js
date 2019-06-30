import React from "react";
import "./SellOptions.css";
import {Link} from "react-router-dom";


class  SellOptions extends React.Component {
  render() {
    return (
      <div className="container container-size">
        <div className="row">
          <div className="col-12 col-md-6 faint-right">
            <h1 className="size mt-5"><Link to={{pathname: `/SellCategories/${this.props.id}`}}><button type="button" className="btn btn-info mr-3">Sell</button></Link>as an Individual <img className="imageSize" src="https://i.imgur.com/8sLNI1r.png" alt=""/> </h1>
            <li className="my-3">15 free sale allowance every month</li>
            <li className="my-3">  Allowance is renewed beginning of every new month</li>

          </div>
          <div className="col-12 col-md-6 container d-flex">
            <div className="m-auto">
            <h1 className="size  mt-5"> <button type="button" className="btn btn-secondary mr-3">Sell</button>as Business owner <img src="https://i.imgur.com/UTNHBu6.png" alt=""/></h1>
            <li className="my-3 ">Customized Online shop</li>
            <li className="my-3 ">Sell internationally</li>
            <li className="my-3 ">Use our delivery service</li>
            <li className="my-3 ">Advertise your products on our sites and platforms, <br/>reach a larger audience</li>
          </div>
        </div>
        </div>
      </div>
    )
  }
}



export default SellOptions;
