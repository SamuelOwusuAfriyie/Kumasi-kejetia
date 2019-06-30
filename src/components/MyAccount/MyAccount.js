import React from "react";
import "./MyAccount.css";
import NumPost from './NumPost.js'
import UserItem from "./../UserItem/UserItem.js";
import {connect} from 'react-redux';
import {loadItem, loadImage, searchItem, loadItemWithId, RemoveItem} from './../../actions/index.js';
import { BrowserRouter,Route, Switch,Link} from "react-router-dom";



class MyAccount extends React.Component {
  state = {
    on: false,
  }
  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }
  toggle2 = () => {
    this.setState({
      on: !this.state.on
    })
  }

  render() {
    if (this.props.UserItem === 'undefined') {
      return(
        <div>
          <div className="jumbotron">
            {/* {this.props.userInfo.firstName} */}

          </div>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h1 className="sizeH1">ALL CATEGORIES</h1>
              <hr/>

            <a href="/MarketCenter">  <button className="mb-3 btn btn-primary">Market Center</button></a><br/>
            <a href={`/MyAccount/${this.props.userId}/MarketCenter`}>  <span  style={{color: 'red'}}>- Your Ads</span></a><br/>
              <span  className="highlight" style={{color: 'red'}}>- Sell</span><br/>
              <span className="highlig" style={{color: 'red'}}>- favorite</span><br/>
              <a href="/Service">  <button className="mb-3 mt-3 btn btn-primary">Services</button></a><br/>
              <span onClick={this.toggle2} className="highlig" style={{color: 'red'}}>- Your Service Profile</span><br/>
              {this.state.on && (
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
                </div>
                  )}
            <a href={`/MyAccount/${this.props.userId}/Services`}>  <span className="highlig" style={{color: 'red'}}>- Your Service Offers</span></a><br/>

              <a href={`/MyAccount/${this.props.userId}/E-Ticketss`}><button className="mb-3 mt-3 btn btn-primary">E-Tickets</button></a><br/>
              <a href={`/MyAccount/${this.props.userId}/E-Books`}><button className="mb-3 mt-3 btn btn-primary">E-Books</button></a><br/>
              <p onClick={this.toggle}> className="redPara">Login and security</p>
              {this.state.on && (
                    <div className='text-center w-100'>
                    <p>First Name:</p>
                    <p>Last Name:</p>
                    <p>Your Email:</p>
                    <p>Your password:</p>
                    </div>
                  )}
              <p className="redPara">Your Locations</p>
              <p className="redPara">Payment Options</p>
            </div>
            <div className="col-8">
              <h1><b>0 Activities</b></h1>
            </div>
          </div>
        </div>
      </div>

      )
    }else if( this.props.UserItem === null ){
      return (
        <div>
          <div className="jumbotron">
            {/* {this.props.userInfo.firstName} */}

          </div>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h1 className="sizeH1">ALL CATEGORIES</h1>
              <hr/>

            <a href="/MarketCenter">  <button className="mb-3 btn btn-primary">Market Center</button></a><br/>
            <a href={`/MyAccount/${this.props.userId}/MarketCenter`}>  <span className="highlig" style={{color: 'red'}}>- Your Ads</span></a><br/>
              <span className="highlig" style={{color: 'red'}}>- Sell</span><br/>
              <span className="highlig" style={{color: 'red'}}>- favorite</span><br/>
               <a href="/Service"><button className="mb-3 mt-3 btn btn-primary">Services</button></a><br/>
              <span onClick={this.toggle2} className="highlig" style={{color: 'red'}}>- Your Service Profile</span><br/>
              {this.state.on && (
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
                </div>
                  )}
              <a href={`/MyAccount/${this.props.userId}/Services`}> <span className="highlig" style={{color: 'red'}}>- Your Service Offers</span></a><br/>
              <a href={`/MyAccount/${this.props.userId}/E-Ticketss`}><button className="mb-3 mt-3 btn btn-primary">E-Tickets</button></a><br/>
              <a href={`/MyAccount/${this.props.userId}/E-Books`}><button className="mb-3 mt-3 btn btn-primary">E-Books</button></a><br/>
              <p onClick={this.toggle}> className="redPara">Login and security</p>
              {this.state.on && (
                    <div className='text-center w-100'>
                    <p>First Name:</p>
                    <p>Last Name:</p>
                    <p>Your Email:</p>
                    <p>Your password:</p>
                    </div>
                  )}
              <p className="redPara">Your Locations</p>
              <p className="redPara">Payment Options</p>
            </div>
            <div className="col-8">
              <h1><b>0 Activities</b></h1>
            </div>
          </div>
        </div>
      </div>
      )
    }else if(this.props.UserItem !== null ){
      return (
        <div>
          <div className="jumbotron">
            {this.props.firstName}
          </div>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <h1 className="sizeH1">ALL CATEGORIES</h1>
              <hr/>

            <a href="/MarketCenter">  <button className="mb-3 btn btn-primary">Market Center</button></a><br/>
            <a href={`/MyAccount/${this.props.userId}/MarketCenter`}>  <span className="highlig" style={{color: 'red'}}>- Your Ads</span></a><br/>
              <span className="highlig" style={{color: 'red'}}>- Sell</span><br/>
              <span className="highlig" style={{color: 'red'}}>- favorite</span><br/>
                <a href="/Service"><button className="mb-3 mt-3 btn btn-primary">Services</button></a><br/>
              <span onClick={this.toggle2} className="highlig" style={{color: 'red'}}>- Your Service Profile</span><br/>

            <a href={`/MyAccount/${this.props.userId}/Services`}>  <span className="highlig" style={{color: 'red'}}>- Your Service Offers</span></a><br/>

              <a href={`/MyAccount/${this.props.userId}/E-Ticketss`}><button className="mb-3 mt-3 btn btn-primary">E-Tickets</button></a><br/>
              <a href={`/MyAccount/${this.props.userId}/E-Books`}><button className="mb-3 mt-3 btn btn-primary">E-Books</button></a><br/>
              <p onClick={this.toggle} className="redPara">Login and security</p>
              {this.state.on && (
                    <div className=' w-100'>
                    <p>First Name:</p>
                    <p>Last Name:</p>
                    <p>Your Email:</p>
                    <p>Your password:</p>
                    </div>
                  )}
              <p className="redPara">Your Locations</p>
              <p className="redPara">Payment Options</p>
            </div>
            <div className="col-8">

              <Switch>
                  <Route path={`/MyAccount/${this.props.userId}`} exact render={()=><NumPost data={this.props.UserItem}/>} />
              <Route  path={`/MyAccount/${this.props.userId}/MarketCenter`} exact render={()=><UserItem removeItem={this.props.RemoveItem} updateItem={this.props.updateItem} path={this.props.mypath} data={this.props.UserItem}/>} />
              </Switch>
              {this.state.on && (
                <div className=" mt-5">
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
                </div>
                  )}
            </div>
          </div>
        </div>
      </div>
      )
    }
  }
}


export default MyAccount ;
