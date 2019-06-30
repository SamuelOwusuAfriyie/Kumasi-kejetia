import React from "react";
import "./Navbar.css";
import {Link,withRouter} from "react-router-dom";
import {Input} from 'reactstrap'




class Navbar extends React.Component {
  constructor(){
    super();
    this.state = {
      on: false,
      toggle:false,
      category:'allcategory',
      value:'',
      search:''
    }
    this.toggle = this.toggle.bind(this);
    this.handletoggle = this.handletoggle.bind(this);
    this.handleChange  = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleAllCategorySearch = this.handleAllCategorySearch.bind(this);
  }
  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }
  handletoggle = ()=>{
    this.setState({
      toggle: !this.state.toggle
    })

  }
  handleChange = (e)=>{
    e.persist();
    this.setState({[e.target.name]:e.target.value})
    console.log(e.target.name , e.target.value);
  }
  handleSearch=(e)=>{
    this.props.history.push(`/buy/${this.state.category}/${this.state.value}`)
  }
  handleAllCategorySearch = (category)=>{
    this.props.history.push(`/buy/${category}`);
    this.setState({
      toggle: false
    })
  }
  render() {
    return(
      <div style={{backgroundColor:'#0787EA'}}>
          <div className='px-4 pb-3 nav-container  text-white'>
              <div className={` ${this.props.mainNav}`}>
                  <div className= 'row py-1'>
                  <div className='pr-2 ml-auto'>
                    <p className='text-white toggle-btn-'  onMouseOver={this.handletoggle}>All Categories<i className="fas fa-sort-down pl-2"></i></p>
                    {this.state.toggle &&
                      (<div className='toggle-categories position-absolute w-25 bg-light  text-dark'style={{zIndex:'4'}} >
                      <p onClick={()=>this.handleAllCategorySearch('allcategory')} className='py-1 px-2 m-0 toggle-list '>All categories</p>

                      <p  onClick={()=>this.handleAllCategorySearch('electronics')} className='py-1 px-2 m-0 toggle-list '>Electronics</p>
                      <p onClick={()=>this.handleAllCategorySearch('vehicles')} className='py-1 px-2 m-0 toggle-list '>Vehicles</p>
                      <p onClick={()=>this.handleAllCategorySearch('property')} className='py-1 px-2 m-0 toggle-list '>Property</p>
                      <p onClick={()=>{this.handleAllCategorySearch('')}} className='py-1 px-2 m-0 toggle-list '>Home & Garden</p>
                      <p onClick={()=>{this.handleAllCategorySearch('')}} className='py-1 px-2 m-0 toggle-list '>Clothing Health & Beauty</p>
                      <p onClick={()=>{this.handleAllCategorySearch('')}} className='py-1 px-2 m-0 toggle-list '>Hobby, sport & kids</p>
                      <p onClick={()=>{this.handleAllCategorySearch('')}} className='py-1 px-2 m-0 toggle-list '>Education Business & Industry</p>
                      <p onClick={()=>{this.handleAllCategorySearch('')}} className='py-1 px-2 m-0 toggle-list '>Business & Industry</p>
                      <p onClick={()=>{this.handleAllCategorySearch('')}} className='py-1 px-2 m-0 toggle-list '>Pets & Animals</p>
                      <p onClick={()=>{this.handleAllCategorySearch('')}} className='py-1 px-2 m-0 toggle-list '>Food & Agriculture</p>

                    </div>)}
                </div>
                {
                  this.props.authData ? <a href={`/SellOptions/${this.props.authData._id }`}><p className='px-2 text-light'>Sell</p></a>: <a href={`Welcome`}> <p className='px-2 text-light'>Sell</p></a> }

                  |
                  <p className='pl-1 mr-1' onClick={this.toggle}><i className="fas fa-user-circle accIcon">{this.props.authMessage === 'authorized'? this.props.authData.firstName + "'s Account":'My Account'}</i></p>
                  {this.state.on && (
                          this.props.authMessage === 'authorized'?
                          <>
                            <p onClick={()=>(this.props.logout())}  className="textDeco">Log out</p>
                          </>:
                          <>
                    <a href="/LoginForm4Account" className="textDeco">Login</a>
                          <a href="/SignUpForm4Account" className="textDeco px-1">SignUp</a></>


                      )}
                </div>
              </div>
              <div  className='row'>
                  <div className='col-4 col-md-3 '>
                      <img className="logo w-75 mg-responsive img-fluid  mr-auto" src="https://i.imgur.com/ki7ZJ1b.png" alt=""/>
                  </div>
                  <div className='col-12 col-md-6 my-auto search-bar'>
                  <form  className=' row ' >
                    <Input onSubmit={this.handleSearch} type="select" name="category" onChange={this.handleChange} className='form-control col-3 search-list pl-2' id="exampleSelect">
                      <option  value='allcategory' >All categories </option>
                      <option value='electronics' onChange={this.handleChange}>Electronics</option>
                      <option  value='vehicles' onChange={this.handleChange}>Vehicles</option>
                      <option  value='property' onChange={this.handleChange}>Property</option>
                      <option  value='' onChange={this.handleChange}>Home & Garden</option>
                      <option  value='' onChange={this.handleChange}>Clothing Health & Beauty</option>
                      <option  value='' onChange={this.handleChange}>Hobby, sport & kids</option>
                      <option value='' onChange={this.handleChange}>Education Business & Industry</option>
                      <option value='' onChange={this.handleChange}>Business & Industry</option>
                      <option value='' onChange={this.handleChange}>Pets & Animals</option>
                      <option value='' onChange={this.handleChange}>Food & Agriculture</option>

                    </Input>
                      <input type='search' value={this.state.value} name='value' onChange={this.handleChange} className='form-control  col-7 p-0 search-input' placeholder='Search By Categories'/>
                      <button type='submit' onClick={this.handleSearch} className='btn  col-1 ml-0 search-input p-0 form-control button-input' style={{backgroundColor:'black'}}> <i className="fas fa-search text-light"></i></button>
                  </form>
                </div>

                  {/* <div className='col-5 col-sm-6  col-md-3 m-auto w-100 icons'>
                    <i className='fas ml-auto fa-exchange-alt'></i>

                    <i className="far fa-heart"></i>
                    <i className="fas fa-shopping-basket">GHC 0.00</i>
                  </div> */}
              </div>
              <div className={`row pt-3 pb-0  col-lg-8 col-12 ${this.props.mainNav}  col-md-12 col-sm-12  text-light`} ><a href="/"><span className="text-light col-3 col-sm-2 bR">Home</span> </a> <a href="/MarketCenter" ><span className="text-light col-md-3 col-sm-2 bR">Market Center</span></a> <a className="bW" href="/Service" ><span className="text-light col-sm-2 bR">Services</span></a> <a id="bC"><span className="text-light col-md-2 col-sm-2 bR ">E-Tickets</span></a><a id="bC"><span className="text-light col-md-2 col-sm-2 bR ">E-Books</span></a></div>
          </div>
      </div>
    //   <div style={{backgroundColor:'#0787EA'}}>
    //   <nav className="navbar">
    //     <div className="logoContainer"><span ><img className="logo" src="https://i.imgur.com/ki7ZJ1b.png" alt=""/></span></div>
    //     <div className="ml-5">
    //       <div id="topRow"><span className="rowList">All </span>  | <a href= "/Welcome" > <span className="rowList">Sell</span></a>  | <span onClick={this.toggle} className="rowList">My Account</span>
    //       {this.state.on && (
    //         <div>
    //         <a href="/LoginForm4Account" className="textDeco">Login</a>
    //         <a href="/SignUpForm4Account" className="textDeco p-4">SignUp</a>
    //         </div>
    //       )}
    //     </div>
    //     </div>
    //   </nav>
    //   <div className={`row py-3 col-lg-8 col-12 ${this.props.mainNav}  col-md-12 col-sm-12  text-light`} ><a href="/"><span className="text-light col-3 col-sm-2 bR">Home</span> </a> <a href="/MarketCenter" ><span className="text-light col-md-3 col-sm-2 bR">Market Center</span></a> <a className="bW" href="/Service" ><span className="text-light col-sm-2 bR">Services</span></a> <a id="bC"><span className="text-light col-md-2 col-sm-2 bR ">E-Tickets</span></a><a id="bC"><span className="text-light col-md-2 col-sm-2 bR ">E-Books</span></a></div>
    // </div>
    )
  }
}
export default withRouter(Navbar);
