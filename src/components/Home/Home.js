import React from "react";
import "./Home.css";
import Slider from "./../Slider/Slider.js";
import {connect} from 'react-redux';
import {loadImageWithId,putInCart,authorized} from './../../actions/index.js'



class Home extends React.Component {
  constructor(){
    super()
    this.addTOCart = this.addTOCart.bind(this)
  }
  componentDidMount(){
    this.props.authorized()
    this.props.putInCart()
    this.props.loadImageWithId('5c2537a1829bfa21a3b42791');
  }
  addTOCart = (id)=>{
  return  this.props.putInCart(id)
  }
  render() {
    if(this.props.items === null){
      return(
        <div style={{height:'70vh'}} className='d-flex'>
          <h1 className='m-auto'>loading ....</h1>
        </div>
      )
    }else if(this.props.items !== null){
    return(
      <div>
        <Slider/>
      <div className="row" style={{marginTop: '280px', marginBottom: '300px'}}>
        <div className="col-4">
            <img src="https://i.imgur.com/V6UGCaL.jpg" alt=""/>
        </div>
        <div className="col-4">
            <img src="https://i.imgur.com/l0rIteF.jpg" alt=""/>
        </div>
        <div className="col-4">
            <img src="https://i.imgur.com/YCpsSgF.jpg" alt=""/>
        </div>
      </div>
      <div className="row"  style={{marginBottom: '300px'}}>
        <div className="col-4">
            <img src="https://i.imgur.com/0aJRbCK.jpg" alt=""/>
        </div>
        <div className="col-4">
            <img src="https://i.imgur.com/WMqMKws.jpg" alt=""/>
        </div>
        <div className="col-4">
            <img src="https://i.imgur.com/LqShTxs.jpg" alt=""/>
        </div>
      </div>
      <div className="row mt-5 text-center">
      <div className="col-12">
        <img src="https://i.imgur.com/sHcgKb6.jpg" alt=""/>
      </div>
      </div>

    { /*  <div className="">
        <h1>{this.props.cart.length}</h1>
        <div id="featured"><span className="productheading">Featured</span>
          <hr size={1} align="left" width="99%" color="#CCCCCC" />
          <div className='row w-100'>
              {
                this.props.items.map((item , index)=>{
                  if(item.categoryType === 'Featured'){
                    return(
                      <div className="col-12 col-sm-12 col-md-6 z col-lg-3">
                        <div className="pcategory">Smartphones</div>
                        <div className="pname">{item.title}</div>
                        <div className="pimage"><img className='img-fluid img-responsive' src={item.image_url} width="100%" /></div>
                        <div className="pricecart"><div className="pprice">GHC{item.price}0</div> <div className="pcart"><i className="fas fa-cart-arrow-down" style={{color: '#000', fontSize: '18px'}} /></div></div><div style={{clear: 'both'}} />
                        <hr align="center" size={1} width="90%" color="#efefef" />
                        <div className="wishlistcompare">
                          <div className="pwishlist" style={{cursor: 'pointer'}} onClick={()=>this.addTOCart(item._id)}><i className="far fa-heart" style={{color: '#333', fontSize: '14px'}} /> Add to Wishlist</div> <div className="pcompare"><i className="fas fa-exchange-alt" style={{color: '#333', fontSize: '14px'}} /> Compare</div></div>
                      </div>
                    )
                  }
                })
              }
          </div>

          </div>
        </div>
        <div style={{clear: 'both'}} />
        <div id="entertainment " className='row  m-auto'>
          <div id="entertainment1 " className='col-12 col-md-6'><img src="imgs/ad-banner-3.png" className='' width="100%" /></div>
          <div className='col-md-6 col-12'>
            <div id="entertainment2"><span className="productheading">Home Entertainment</span>
              <hr size={1} align="left" width="100%" color="#ccc" />
              <div className='row'>
                  <div className='col-12 col-md-6'>
                      <div id="entertainment2a" className='w-100 mx-auto'><div className="pcategory">Smartphones</div>
                      <div className="pname">Tablet EliteBook Revolve 810</div>
                      <div className="pimage"><img src="imgs/Smartphone6-300x300.jpg" width="100%" /></div>
                      <div className="pricecart"><div className="pprice">GHC1,300.00</div> <div className="pcart"><i className="fas fa-cart-arrow-down" style={{color: '#000', fontSize: '18px'}} /></div></div><div style={{clear: 'both'}} />
                      <hr align="center" size={1} width="90%" color="#efefef" />
                      <div className="wishlistcompare">
                        <div className="pwishlist"><i className="far fa-heart" style={{color: '#333', fontSize: '14px'}} /> Add to Wishlist</div> <div className="pcompare"><i className="fas fa-exchange-alt" style={{color: '#333', fontSize: '14px'}} /> Compare</div></div></div>

                  </div>
                  <div className='col-12 col-md-6'>
                      <div id="entertainment2b" className='w-100 mx-auto'><div className="pcategory">Smartphones</div>
                      <div className="pname">Smartphone 6S 128GB LTE</div>
                      <div className="pimage"><img src="imgs/Smartphone7-300x300.jpg" width="100%" /></div>
                      <div className="pricecart"><div className="pprice">GHC780.00</div> <div className="pcart"><i className="fas fa-cart-arrow-down" style={{color: '#000', fontSize: '18px'}} /></div></div><div style={{clear: 'both'}} />
                      <hr align="center" size={1} width="90%" color="#efefef" />
                      <div className="wishlistcompare">
                        <div className="pwishlist"><i className="far fa-heart" style={{color: '#333', fontSize: '14px'}} /> Add to Wishlist</div> <div className="pcompare"><i className="fas fa-exchange-alt" style={{color: '#333', fontSize: '14px'}} /> Compare</div></div></div>

                  </div>

              </div>
            </div>
          </div>
        </div>
        <div style={{clear: 'both'}} />
        <div id="featured" ><span className="productheading">Laptops &amp; Computers</span>
          <hr size={1} align="left" width="99%" color="#ccc" />

          <div className='row w-100'>
            {
            this.props.items.map((item,index)=>{
              if(item.categoryType === 'LaptopsComputers'){
                return(
                  <div className="col-12 col-sm-12 col-md-6  col-lg-3 pr-0">
                    <div className="pcategory">Laptops</div>
                    <div className="pname">{item.title}</div>
                    <div className="pimage"><img src={item.image_url} width="100%" /></div>
                    <div className="pricecart"><div className="pprice">GHC{item.price}</div> <div className="pcart"><i className="fas fa-cart-arrow-down" style={{color: '#000', fontSize: '18px'}} /></div></div><div style={{clear: 'both'}} />
                    <hr align="center" size={1} width="90%" color="#efefef" />
                    <div className="wishlistcompare">
                      <div className="pwishlist" style={{cursor: 'pointer'}} onClick={()=>this.addTOCart(item._id)}><i className="far fa-heart" style={{color: '#333', fontSize: '14px'}} /> Add to Wishlist</div> <div className="pcompare"><i className="fas fa-exchange-alt" style={{color: '#333', fontSize: '14px'}} /> Compare</div></div>
                  </div>
              )
              }
            })

            }

          </div>
        </div>
        <div style={{clear: 'both'}} />
        <div id="bestsellers"><span className="productheading">Bestsellers</span>
          <hr size={1} align="left" width="99%" color="#ccc" />
            <div className='row w-100'>

              <div id="bestsellers1" className='col-12 col-sm-12 col-md-7 row m-auto col-lg-7'>
              {
                this.props.items.map((item ,index)=>{
                  if(item.categoryType === 'Bestsellers'){
                    return(
                      <div className='col-12 col-sm-12 col-md-6  col-lg-4'>
                        <div className="pcategory0">Laptops</div>
                        <div className="pname0">Sony T3100</div>
                        <div className="pimage0"><img src={item.image_url} width="100%" /></div>
                        <div className="pricecart0"><div className="pprice">GHC{item.price}</div> <div className="pcart"><i className="fas fa-cart-arrow-down" style={{color: '#000', fontSize: '18px'}} /></div></div><div style={{clear: 'both'}} />
                        <hr align="center" size={1} width="90%" color="#efefef" />
                        <div className="wishlistcompare0">
                          <div className="pwishlist0" style={{cursor: 'pointer'}} onClick={()=>this.addTOCart(item._id)}><i className="far fa-heart" style={{color: '#333', fontSize: '14px'}} /> Add to Wishlist</div> <div className="pcompare0"><i className="fas fa-exchange-alt" style={{color: '#333', fontSize: '14px'}} /> Compare</div></div>
                      </div>
                    )
                  }
                })
              }
              </div>
              <div id="bestsellers2" className='col-12 col-sm-12 col-md-4 m-auto col-lg-5'>
                <div className="pcategory1">Home &amp; Garden</div>
                <div className="pname1">White NX Mini F1 Smart NX</div>
                <div className="pimage1"><img src="imgs/Photocamera-600x550.jpg" width="100%" /></div>
                <div className="pricecart1"><div className="pprice">GHC550.00</div> <div className="pcart"><i className="fas fa-cart-arrow-down" style={{color: '#000', fontSize: '18px'}} /></div></div><div style={{clear: 'both'}} />
                <hr align="center" size={1} width="90%" color="#efefef" />
                <div className="wishlistcompare1">
                  <div className="pwishlist1"><i className="far fa-heart" style={{color: '#333', fontSize: '14px'}} /> Add to Wishlist</div> <div className="pcompare1"><i className="fas fa-exchange-alt" style={{color: '#333', fontSize: '14px'}} /> Compare</div></div>
              </div>
            </div>
        </div>
        <div style={{clear: 'both'}} />*/}
        <div id="topcat"><span className="productheading">Top Categories this Month</span>
          <hr size={1} align="left" width="99%" color="#ccc" />
          <div className='row'>
            <div className='col-12 col-md-4 col-lg-4 m-auto row'>
              <div id="topcatp" className='d-flex col-5'><img className="m-auto" src="https://i.imgur.com/Gmxl5T8.jpg" alt="" width="100%" /></div>
              <div id="topcatd" className='col-6'><span className="productheading2">Electronics</span><a href="#">Mobile Phones</a><a href="#">Computer Accessories</a><a href="#">TVs</a></div>
            </div>
              <div className=' col-12 col-md-4 col-lg-4 m-auto row'>
                <div id="topcatp" className='d-flex col-5'><img className="m-auto" src="https://i.imgur.com/lw8pKPd.jpg" width="100%" /></div>
                <div id="topcatd" className='col-6'><span className="productheading2">Vechicles</span><a href="#">Cars</a><a href="#">Auto Parts</a><a href="#">Trucks,V1ans & Buses</a></div>
              </div>
              <div className='col-12 col-md-4 col-lg-4 m-auto row'>
                <div id="topcatp0" className='d-flex col-5'><img className="m-auto" src="https://i.imgur.com/lw8pKPd.jpg" width="100%" /></div>
                <div id="topcatd0" className='col-6'><span className="productheading2">Property</span><a href="#">Houses </a><a href="#">Apartments</a><a href="#">Commercial Properties</a></div>
              </div>
        </div>
      </div>
  </div>
    )
  }}
}

const mapStateToProps = (state)=>{
let list = state.post.userPost;
let arrlist = list? list:null;
let cartList = state.user.cart;
let arrCart = cartList?cartList:[]
  return{
    items: arrlist,
    cart:arrCart,
  }
}
export default connect(mapStateToProps,{loadImageWithId,putInCart,authorized})(Home);
