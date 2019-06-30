import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
/*import image from './../../server/uploads/profileImage-1540165943441.jpg'*/
import UserItem from "./../UserItem/UserItem.js";
import "./MarketCenter.css";

class MarketCenter extends React.Component {
  render() {
    /*  console.log(this.props.data);
    const items = this.props.data*/
    return (
      <div className="container my-5">
        <form className="form-group">
          <div className="row jumbotron">
            <input className="form-control ml-lg-5  px-5 ml-auto col-sm-6 col-8 col-md-5 col-lg-6" type="text" placeholder="what are you searching" name="title" value={this.props.title} onChange={this.props.handleSearchItem}/>
            <button className="form-control btn sear  col-sm-6 col-md-4 col-4 col-lg-3">Search</button>
            <Link className=" col-sm-3 col-md-3 m-auto mt-3 col-lg-2" to={{
              pathname: '/Welcome'
            }}>
              <button className="form-control btn w-100 sear3 ">Sell</button>
            </Link>
          </div>
        </form>
        <div className='row'>
          <div className="sideBar  d-sm-none  d-none d-lg-block col-4 toTheLeft jumbotron">
            <h1 className="sizeFont ml-5">All Categories</h1>
            <hr/>
            <h1 className="ml-5  font1" onClick={() => {
              this.props.handleSearchCategory("electronics")
            }} name='uuuuuu'><img className="imageSize2  mr-2" src="https://i.imgur.com/vJTS0vz.png" alt=""/>Electronics <samp className="countColor">{this.props.showNumberOfItemPost("electronics",this.props.allData)}</samp></h1>
            <hr className="ml-5 size1"/>

            <h1 className="ml-5 font1" onClick={() => {
              this.props.handleSearchCategory('vehicles')
            }}><img className="imageSize2  mr-2" src="https://i.imgur.com/fcOYyBN.png" alt=""/>Vehicles <samp className="countColor">{this.props.showNumberOfItemPost("vehicles",this.props.allData)}</samp></h1>
            <hr className="ml-5 size1"/>
            <h1 className="ml-5 font1" onClick={() => {
              this.props.handleSearchCategory( 'Property')
            }}><img className="imageSize2 mr-2" src="https://i.imgur.com/KsvmsRq.png" alt=""/>Property <samp className="countColor">{this.props.showNumberOfItemPost("Property",this.props.allData)}</samp></h1>
            <hr className="ml-5 size1"/>
            <h1 className="ml-5 font1"  onClick={() => {
              this.props.handleSearchCategory("HomeAndGarden")}}><img className="imageSize2  mr-2" src="https://i.imgur.com/4m1Ucc7.png" alt=""/>Home & Garden <samp className="countColor">{this.props.showNumberOfItemPost("Home & Garden",this.props.allData)}</samp></h1>
            <hr className="ml-5 size1"/>
            <h1 className="ml-5 font1" onClick={() => {
              this.props.handleSearchCategory("ClothingHealthAndBeauty")}}><img className="imageSize2  mr-2" src="https://i.imgur.com/WJkvzrj.png" alt=""/>Clothing Health & Beauty <samp className="countColor">{this.props.showNumberOfItemPost("ClothingHealthAndBeauty",this.props.allData)}</samp></h1>
            <hr className="ml-5 size1"/>
            <h1 className="ml-5 font1" onClick={() => {
              this.props.handleSearchCategory("HobbysportAndkids")}}><img className="imageSize2  mr-2" src="https://i.imgur.com/5gI5hmN.png" alt=""/>Hobby, sport & kids <samp className="countColor">{this.props.showNumberOfItemPost("HobbysportAndkids",this.props.allData)}</samp></h1>
            <hr className="ml-5 size1"/>
            <h1 className="ml-5 font1" onClick={() => {
              this.props.handleSearchCategory('BusinessAndIndustry')}}><img className="imageSize2  mr-2" src="https://i.imgur.com/qzLxaa8.png" alt=""/>Business & Industry <samp className="countColor">{this.props.showNumberOfItemPost("BusinessAndIndustry",this.props.allData)}</samp></h1>
            <hr className="ml-5 size1"/>
            <h1 className="ml-5 font1" onClick={() => {
              this.props.handleSearchCategory('Education')}}><img className="imageSize2  mr-2" src="https://i.imgur.com/1VEJmbX.png" alt=""/>Education Business & Industry <samp className="countColor">{this.props.showNumberOfItemPost("Education",this.props.allData)}</samp></h1>
            <hr className="ml-5 size1"/>
            <h1 className="ml-5 font1" onClick={() => {
              this.props.handleSearchCategory('PetsAndAnimals')}}><img className="imageSize2  mr-2" src="https://i.imgur.com/FJS8D3z.png" alt=""/>Pets & Animals <samp className="countColor">{this.props.showNumberOfItemPost("PetsAndAnimals",this.props.allData)}</samp></h1>
            <hr className="ml-5 size1"/>
            <h1 className="ml-5 font1" onClick={() => {
              this.props.handleSearchCategory('FoodAndAgriculture')}}><img className="imageSize2  mr-2" src="https://i.imgur.com/7QjE9S9.png" alt=""/>Food & Agriculture <samp className="countColor">{this.props.showNumberOfItemPost("FoodAndAgriculture",this.props.allData)}</samp></h1>
            <hr className="ml-5 size1"/>
            <h1 className="ml-5 font1" onClick={() => {
              this.props.handleSearchCategory('Other')}}><img className="imageSize2  mr-2" src="https://i.imgur.com/y4cPYJN.png" alt=""/>Other <samp className="countColor">{this.props.showNumberOfItemPost("Other",this.props.allData)}</samp></h1>

          </div>
          <div className="col-12 col-md-12 col-lg-7">
            <UserItem data={this.props.data}/>
          </div>
        </div>
      </div>
    )
  }
}

MarketCenter.propTypes = {
  children: PropTypes.array
};

export default MarketCenter
