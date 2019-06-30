import React from "react";
import "./Service.css";
import {Link} from "react-router-dom";

class Service extends React.Component {
  constructor(){
    super();
      this.state ={
        toggle:'d-none',

    }
    this.handletoggle = this.handletoggle.bind(this);
  }
handletoggle(){
  console.log(this.state.toggle);
this.state.toggle === 'd-none'?this.setState({toggle:''}): this.setState({toggle:'d-none'})
}


  render() {
    return(
      <div>
        <div id="home">
      <nav className="navbar2 navbar-expand-sm bg-dark navbar-dark  fixed-top">
        <div className='d-flex py-5'>
          <div className="container m-auto row">
            <div className="col">
            <a href="" className="navbar-brand ">Services Portal</a>
          </div>
              <button className="navbar-toggler" onClick={this.handletoggle} data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
              </button>
                <div style={{zIndex:'4',top:'0px'}} className={` d-lg-toggle-none ${this.state.toggle} `} id="">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                  <Link to={{ pathname: 'HowItWorks' }} className="nav-link">How it Works</Link>
                  </li>
                  <li className="nav-item">
                <Link to={{ pathname: 'ServiceDetails' }} className="nav-link">Business Profiles</Link>
                  </li>
                  <li className="nav-item">
                <a href="" className="nav-link">Service offers</a>
                  </li>
                </ul>
              </div>
              <div className="collapse c ml-auto navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                <Link to={{ pathname: 'HowItWorks' }} className="nav-link">How it Works</Link>
                  </li>
                  <li className="nav-item">
                  <Link to={{ pathname: 'ServiceDetails' }} className="nav-link">Business Profiles</Link>
                  </li>
                  <li className="nav-item">
                <a href="" className="nav-link">Service offers</a>
                  </li>
                </ul>
              </div>
          </div>
        </div>
          <div style={{backgroundColor:' #008ed6'}} className={` row pt-3 pb-2   col-12 d-none d-sm-block col-md-12 col-sm-12  mx-0 text-light`} ><a href="/"><span className="text-light col-3 col-sm-2 bR">Home</span> </a> <a href="/MarketCenter" ><span className="text-light col-md-3 col-sm-2 bR">Market Center</span></a> <a className="bW" href="/Service" ><span className="text-light col-sm-2 bR">
          Services</span></a> <a id="bC"><span className="text-light col-md-2 col-sm-2 bR ">E-Tickets</span></a><a id="bC"><span className="text-light col-md-2 col-sm-2 bR ">E-Books</span></a></div>
      </nav>
      <header id="home-section">
      <div className="dark-overlay">
        <div className="home-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 ">
                  <h1 className="display-4">
                    Build <strong>social profiles</strong> and gain revenue & profits </h1>
                    <div className="d-flex flex-row">
                      <div className="p-4 align-self-start">
                        <i className="fa fa-check"></i>
                      </div>
                      <div className="p-4 align-self-end">
                        Build your Business profile and expose your services to an endless list of potential clients-Handymen/Business Owners
                      </div>
                    </div>
                    <div className="d-flex flex-row">
                      <div className="p-4 align-self-start">
                        <i className="fa fa-check"></i>
                      </div>
                      <div className="p-4 align-self-end">
                        Finding a service provider is easier with Kejetia Service Portal
                      </div>
                    </div>
                    <div className="d-flex flex-row">
                      <div className="p-4 align-self-start">
                        <i className="fa fa-check"></i>
                      </div>
                      <div className="p-4 align-self-end">
                        Days of chasing your service provider after payment are made is over, you get what you pay for.
                      </div>
                    </div>
                </div>
            {  /*  <div className="col-lg-4 ">
                <div className="card bg-primary text-center card-form">
                  <div className="card-body">
                    <h3>Sign up today</h3>
                    <p>please fill out this form</p>
                    <form>
                      <div className="form-group">
                        <input type="text" className="form-control form-control-lg" placeholder="Username"/>
                      </div>
                      <div className="form-group">
                        <input type="email" className="form-control form-control-lg" placeholder="Email"/>
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control form-control-lg" placeholder="Password"/>
                      </div>
                      <div className="form-group">
                        <input type="password" className="form-control form-control-lg" placeholder="Confirm Password "/>
                      </div>
                      <input type="submit" value="submit" className="btn btn-outline-light btn-block"/>
                    </form>
                  </div>
                </div>
              </div>*/}

            </div>
          </div>
        </div>
      </div>
      </header>
      <div className="">
        <div className="  colorBackground ">
          <div className="borderDiv">
          <p className="pl-5 pt-3">Plumbing</p>
          </div>
          <div className="borderDiv">
          <p className="pl-5 pt-3">Carpentary</p>
          </div>
          <div className="borderDiv">
          <p className="pl-5 pt-3">Air Condition Installation/Maintenance</p>
          </div>
          <div className="borderDiv">
          <p className="pl-5 pt-3">Electrical</p>
          </div>
          <div className="borderDiv">
          <p className="pl-5 pt-3">House Hold Cleaning</p>
          </div>
          <div className="borderDiv">
          <p className="pl-5 pt-3">Handymen</p>
          </div>
          <div className="borderDiv">
          <p className="pl-5 pt-3">Painting</p>
          </div>
          <div className="borderDiv">
          <p className="pl-5 pt-3">Kitchen Works</p>
          </div>
          <div className="borderDiv">
          <p className="pl-5 pt-3">Bath Work</p>
          </div>
          <div className="borderDiv">
          <p className="pl-5 pt-3">Interior Décor</p>
          </div>
          <div className="borderDiv">
          <p className="pl-5 pt-3">Landscaping</p>
          </div>
          <div className="borderDiv">
          <p className="pl-5 pt-3">Lawn and Yard Work</p>
          </div>
          <div className="borderDiv">
          <p className="pl-5 pt-3">HomeCare</p>
          </div>
          <div className="borderDiv">
          <p className="pl-5 pt-3">Appliance Repair</p>
          </div>
          <div className="borderDiv">
          <p className="pl-5 pt-3">Auto Service</p>
          </div>
          <div className="borderDiv">
          <p className="pl-5 pt-3">Moving</p>
          </div>
          <div className="borderDiv">
          <p className="pl-5 pt-3">Hair Care</p>
          </div>
          <div className="borderDiv">
          <p className="pl-5 pt-3">Animal Care</p>
          </div>
        </div>
        <div className="colorBackground2 ">

        </div>
      </div>
    </div>
    </div>
    )
  }
}
export default Service;
