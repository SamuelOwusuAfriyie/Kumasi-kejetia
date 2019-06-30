import React from "react";
import "./NavbarTog.css";
import {Link,withRouter} from "react-router-dom";



class NavbarTog extends React.Component {
  state = {
    on: false,
  }
  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }
  render() {
    return(
      <nav className="navbar navbar-expand-sm" style={{backgroundColor:'#0787EA'}}>
        <div className= 'row py-1 text-white w-100'>

        <p className='pr-2 ml-auto'><Link to='/MarketCenter' className='text-white'>All Categories</Link></p>
        |
        <p className='px-2'>Sell</p>
        |
        <p className='pl-2 mr-3' onClick={this.toggle}><i className="fas fa-user-circle">My Account</i></p>
        {this.state.on && (
              <div className='text-center w-100'>
              <a href="/LoginForm4Account" className="textDeco">Login</a>
              <a href="/SignUpForm4Account" className="textDeco p-4">SignUp</a>
              </div>
            )}
      </div>
        <div className="container">
            <div>
              <ul className="">
                <li className="nav-item">
              <a href="/" className="text-light">Home</a>
                </li>
                <li className="nav-item">
              <a href="/MarketCenter" className=" text-light">Market Center</a>
                </li>
                <li className="nav-item">
              <a href="/Service" className="text-light">Services</a>
                </li>
      	<li className="nav-item">
              <a href="#" className="text-light">E-tickets</a>
                </li>
                <li className="nav-item">
                      <a href="#" className="text-light">E-books</a>
                        </li>
              </ul>
            </div>
        </div>

    </nav>
    )
  }
}
export default withRouter(NavbarTog);
