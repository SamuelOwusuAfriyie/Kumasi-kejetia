import React from "react";
import "./SellCategories.css";

class SellCategories extends React.Component {
  state = {
    on: false,
    vechon:false,
    electon: false,
    properon: false,
    homeGaron: false,
    clothingon: false
  }
  toggleElectronics = () => {
    this.setState({
      electon: !this.state.electcon
    })
  }
  toggleProperty = () => {
    this.setState({
      properon: !this.state.properon
    })
  }
  toggleVechon = () => {
    this.setState({
      vechon: !this.state.vechon
    })
  }
  toggleHomeGar = () => {
    this.setState({
      homeGaron: !this.state.homeGaron
    })
  }
  toggleClothing = () => {
    this.setState({
      clothingon: !this.state.clothingon
    })
  }
  toggleHobby = () => {
    this.setState({
      hobbyon: !this.state.hobbyon
    })
  }
  toggleBusiness = () => {
    this.setState({
      businesson: !this.state.businesson
    })
  }
  toggleEducation = () => {
    this.setState({
      educationon: !this.state.educationon
    })
  }
  togglePets = () => {
    this.setState({
      petson: !this.state.petson
    })
  }
  toggleFood = () => {
    this.setState({
      foodon: !this.state.foodon
    })
  }
  render() {
    return (
      <div className="jumbotron">
      <div className="container mt-5">
        <h1 className="fontSize">Sell an item</h1>
        <hr className="bottom"/>
        <div id="edge">
          <p className="ml-5 sizeFont">Sell a category...</p>
          <hr className="ml-5 size1"/>
          <h1 className="ml-5 font1" onClick={this.toggleElectronics.bind(this)}><img className="imageSize2  mr-2" src="https://i.imgur.com/vJTS0vz.png" alt=""/>Electronics</h1>  {this.state.electon && (
            <div>
              <a href={`/form/${this.props.id}/electronics/Mobile phones`}><h1 className="togfont">Mobile phones</h1></a>
              <a href={`/form/${this.props.id}/electronics/Mobile Phone Accessories`}><h1 className="togfont">Mobile Phone Accessories</h1></a>
              <a href={`/form/${this.props.id}/electronics/Computers & Tablets`}><h1 className="togfont">Computers & Tablets</h1></a>
              <a href={`/form/${this.props.id}/electronics/Computer Accessories`}><h1 className="togfont">Computer Accessories</h1></a>
              <a href={`/form/${this.props.id}/electronics/TVs`}><h1 className="togfont">TVs</h1></a>
              <a href={`/form/${this.props.id}/electronics/Tv & Video Accessories`}><h1 className="togfont">Tv & Video Accessories</h1></a>
              <a href={`/form/${this.props.id}/electronics/Cameras & Camcorders`}><h1 className="togfont">Cameras & Camcorders</h1></a>
              <a href={`/form/${this.props.id}/electronics/Audio & MP3`}><h1 className="togfont">Audio & MP3</h1></a>
              <a href={`/form/${this.props.id}/electronics/Other Electronics`}><h1 className="togfont">Other Electronics</h1></a>

            </div>
          )}
          <hr className="ml-5 size1"/>
          <h1 className="ml-5 font1"  onClick={this.toggleVechon.bind(this) }><img className="imageSize2  mr-2" src="https://i.imgur.com/fcOYyBN.png" alt=""/>Vehicles</h1>{this.state.vechon && (
            <div>
              <a href={`/form/${this.props.id}/vehicles/Cars`}><h1 className="togfont">Cars</h1></a>
              <a href={`/form/${this.props.id}/vehicles/Motorbikes & scotters`}><h1 className="togfont">Motorbikes & scotters</h1></a>
              <a href={`/form/${this.props.id}/vehicles/trucks,vans & buses`}><h1 className="togfont">Trucks,Vans & Buses</h1></a>
              <a href={`/form/${this.props.id}/vehicles/Tractors and heavy-duty`}><h1 className="togfont">Tractors and heavy-Duty</h1></a>
              <a href={`/form/${this.props.id}/vehicles/auto Parts & accessories`}><h1 className="togfont">Auto Parts & Accessories</h1></a>
              <a href={`/form/${this.props.id}/Bicycles/Bicycles`}><h1 className="togfont">Bicycles</h1></a>
              <a href={`/form/${this.props.id}/vehicles/Boats & water Transports`}><h1 className="togfont">Boats & Water Transports</h1></a>
            </div>
          )}
          <hr className="ml-5 size1"/>
          <h1 className="ml-5 font1" onClick={this.toggleProperty.bind(this)}><img className="imageSize2 mr-2" src="https://i.imgur.com/KsvmsRq.png" alt=""/>Property</h1>{this.state.properon && (
            <div>
              <a href={`/form/${this.props.id}/Property/Houses`}><h1 className="togfont">Houses</h1></a>
              <a href={`/form/${this.props.id}/Property/Apartments`}><h1 className="togfont">Apartments</h1></a>
              <a href={`/form/${this.props.id}/Property/New Developments`}><h1 className="togfont">New Developments</h1></a>
              <a href={`/form/${this.props.id}/Property/Land`}><h1 className="togfont">Land</h1></a>
              <a href={`/form/${this.props.id}/Property/Commercial properties`}><h1 className="togfont">Commercial properties</h1></a>
            </div>
            )}
          <hr className="ml-5 size1"/>
          <h1 className="ml-5 font1" onClick={this.toggleHomeGar.bind(this)}><img className="imageSize2  mr-2" src="https://i.imgur.com/4m1Ucc7.png" alt=""/>Home & Garden</h1>{this.state.homeGaron && (
            <div>
              <a href={`/form/${this.props.id}/HomeAndGarden/Furniture`}><h1 className="togfont">Furniture</h1></a>
              <a href={`/form/${this.props.id}/HomeAndGarden/Home Appliance`}><h1 className="togfont">Home Appliance</h1></a>
              <a href={`/form/${this.props.id}/HomeAndGarden/Electricity,AC,Bathroom & Garden`}><h1 className="togfont">Electricity,AC,Bathroom & Garden</h1></a>
              <a href={`/form/${this.props.id}/HomeAndGarden/OtherHomeItems`}><h1 className="togfont">Other Home Items</h1></a>
            </div>
            )}
          <hr className="ml-5 size1"/>
          <h1 className="ml-5 font1" onClick={this.toggleClothing.bind(this)}><img className="imageSize2  mr-2" src="https://i.imgur.com/WJkvzrj.png" alt=""/>Clothing, Health & Beauty</h1>{this.state.clothingon && (
          <div>
            <a href={`/form/${this.props.id}/ClothingHealth&eauty/Cars`}><h1 className="togfont">Cars</h1></a>
            <a href={`/form/${this.props.id}/ClothingHealthAndBeauty/Clothing & Fashion`}><h1 className="togfont">Clothing & Fashion</h1></a>
            <a href={`/form/${this.props.id}/ClothingHealthAndBeauty/Shoes & Footwear`}><h1 className="togfont">Shoes & Footwear</h1></a>
            <a href={`/form/${this.props.id}/Jewelllery`}><h1 className="togfont">Jewelllery</h1></a>
            <a href={`/form/${this.props.id}/ClothingHealthAndBeauty/Eyeglasses`}><h1 className="togfont">Eyeglasses</h1></a>
            <a href={`/form/${this.props.id}/ClothingHealthAndBeauty/Watches`}><h1 className="togfont">Watches</h1></a>
            <a href={`/form/${this.props.id}/ClothingHealthAndBeauty/Bags`}><h1 className="togfont">Bags</h1></a>
            <a href={`/form/${this.props.id}/ClothingHealthAndBeauty/Other Fashion Accessories`}><h1 className="togfont">Other Fashion Accessories</h1></a>
            <a href={`/form/${this.props.id}/ClothingHealthAndBeauty/Health & Beauty Products`}><h1 className="togfont">Health & Beauty Products</h1></a>
            <a href={`/form/${this.props.id}/ClothingHealthAndBeauty/Other Personal Items`}><h1 className="togfont">Other Personal Items</h1></a>
          </div>
          )}
          <hr className="ml-5 size1"/>
          <h1 className="ml-5 font1" onClick={this.toggleHobby.bind(this)}><img className="imageSize2  mr-2" src="https://i.imgur.com/5gI5hmN.png" alt=""/>Hobby, sport & kids</h1>{this.state.hobbyon && (
            <div>
              <a href={`form/${this.props.id}/Hobbysport&kids/Mobile phones`}><h1 className="togfont">Musical Instruments</h1></a>
              <a href={`/form/${this.props.id}/HobbysportAndkids/Mobile Phone Accessories`}><h1 className="togfont">Sports Equipment</h1></a>
              <a href={`/form/${this.props.id}/HobbysportAndkids/Computers & Tablets`}><h1 className="togfont">Travel Items</h1></a>
              <a href={`/form/${this.props.id}/HobbysportAndkids/Computer Accessories`}><h1 className="togfont">Events & Tickets</h1></a>
              <a href={`/form/${this.props.id}/HobbysportAndkids/TVs`}><h1 className="togfont">Handicrafts</h1></a>
              <a href={`/form/${this.props.id}/HobbysportAndkids/Tv & Video Accessories`}><h1 className="togfont">Art & Collectibles</h1></a>
              <a href={`/form/${this.props.id}/HobbysportAndkids/Cameras & Camcorders`}><h1 className="togfont">Music,Books & Movies</h1></a>
              <a href={`/form/${this.props.id}/HobbysportAndkids/Cameras & Camcorders`}><h1 className="togfont">Video Games & Consoles</h1></a>
              <a href={`/form/${this.props.id}/HobbysportAndkids/Cameras & Camcorders`}><h1 className="togfont">Children's Items</h1></a>
              <a href={`/form/${this.props.id}/HobbysportAndkids/Cameras & Camcorders`}><h1 className="togfont">Other Hobby,Sports & Kids Items</h1></a>
            </div>
            )}
          <hr className="ml-5 size1"/>
          <h1 className="ml-5 font1" onClick={this.toggleBusiness.bind(this)}><img className="imageSize2  mr-2" src="https://i.imgur.com/qzLxaa8.png" alt=""/>Business & Industry</h1>{this.state.businesson && (
            <div>
              <a href={`/form/${this.props.id}/BusinessAndIndustry/OfficeSupplies`}><h1 className="togfont">Office Supplies</h1></a>
              <a href={`/form/${this.props.id}/BusinessAndIndustry/IndustryTools&Machinery`}><h1 className="togfont">Industry Tools & Machinery</h1></a>
              <a href={`/form/${this.props.id}/BusinessAndIndustry/TravelItems`}><h1 className="togfont">Travel Items</h1></a>
              <a href={`/form/${this.props.id}/BusinessAndIndustry/Events&Tickets`}><h1 className="togfont">Events & Tickets</h1></a>
              <a href={`/form/${this.props.id}/BusinessAndIndustry/Handicrafts`}><h1 className="togfont">Handicrafts</h1></a>
              <a href={`/form/${this.props.id}/BusinessAndIndustry/Art&Collectibles`}><h1 className="togfont">Art & Collectibles</h1></a>
              <a href={`/form/${this.props.id}/BusinessAndIndustry/MusicBooks&Movies`}><h1 className="togfont">Music,Books & Movies</h1></a>
              <a href={`/form/${this.props.id}/BusinessAndIndustry/VideoGames&Consoles`}><h1 className="togfont">Video Games & Consoles</h1></a>
              <a href={`/form/${this.props.id}/BusinessAndIndustry/ChildrenItems`}><h1 className="togfont">Children's Items</h1></a>
              <a href={`/form/${this.props.id}/BusinessAndIndustry/OtherHobbySports&KidsItems`}><h1 className="togfont">Other Hobby,Sports & Kids Items</h1></a>
            </div>
            )}
          <hr className="ml-5 size1"/>
          <h1 className="ml-5 font1" onClick={this.toggleEducation.bind(this)}><img className="imageSize2  mr-2" src="https://i.imgur.com/1VEJmbX.png" alt=""/>Education</h1>{this.state.educationon && (
            <div>
              <a href={`/form/${this.props.id}/Education/Text Books`}><h1 className="togfont">Text Books</h1></a>
              <a href={`/form/${this.props.id}/Education/Teaching and training`}><h1 className="togfont">Teaching and training</h1></a>
              <a href={`/form/${this.props.id}/Education/Other Education`}><h1 className="togfont">Other Education</h1></a>
            </div>
            )}
          <hr className="ml-5 size1"/>

          <h1 className="ml-5 font1" onClick={this.togglePets.bind(this)}><img className="imageSize2  mr-2" src="https://i.imgur.com/FJS8D3z.png" alt="" />Pets & Animals</h1>{this.state.petson && (
            <div>
              <a href={`/form/${this.props.id}/PetsAndAnimals/Pets`}><h1 className="togfont">Pets</h1></a>
              <a href={`/form/${this.props.id}/PetsAndAnimals/Farm Animals`}><h1 className="togfont">Farm Animals</h1></a>
              <a href={`/form/${this.props.id}/PetsAndAnimals/Food for Animals`}><h1 className="togfont">Food for Animals</h1></a>
              <a href={`/form/${this.props.id}/PetsAndAnimals/Accessories for Animals`}><h1 className="togfont">Accessories for Animals</h1></a>
              <a href={`/form/${this.props.id}/PetsAndAnimals/Caretakers, Pet sitters & Dog walkers`}><h1 className="togfont">Caretakers, Pet sitters & Dog walkers</h1></a>
              <a href={`/form/${this.props.id}/PetsAndAnimals/Veterinary Services`}><h1 className="togfont">Veterinary Services</h1></a>
            </div>
          )}
          <hr className="ml-5 size1"/>
          <h1 className="ml-5 font1" onClick={this.toggleFood.bind(this)}><img className="imageSize2  mr-2" src="https://i.imgur.com/7QjE9S9.png" alt=""/>Food & Agriculture</h1>{this.state.foodon && (
            <div>
              <a href={`/form/${this.props.id}/FoodAndAgriculture/Food`}><h1 className="togfont">Food</h1></a>
              <a href={`/form/${this.props.id}/FoodAndAgriculture/Crops, Seeds & Plants`}><h1 className="togfont">Crops, Seeds & Plants</h1></a>
              <a href={`/form/${this.props.id}/FoodAndAgriculture/Chemicals,Tools & Machinery`}><h1 className="togfont">Chemicals,Tools & Machinery</h1></a>
              <a href={`/form/${this.props.id}/FoodAndAgriculture/Other Food & Agriculture`}><h1 className="togfont">Other Food & Agriculture</h1></a>
            </div>
          )}
          <hr className="ml-5 size1"/>
          <a href={`/form/${this.props.id}/Other/Other`}><h1 className="ml-5 font1" ><img className="imageSize2  mr-2" src="https://i.imgur.com/y4cPYJN.png" alt=""/>Other</h1></a>
          <hr className="ml-5 size1"/>
          <a href={`/form/${this.props.id}/Other/Featured`}><h1 className="ml-5 font1" ><img className="imageSize2  mr-2" src="https://i.imgur.com/y4cPYJN.png" alt=""/>Featured</h1></a>
          <hr className="ml-5 size1"/>
          <a href={`/form/${this.props.id}/Other/LaptopsComputers`}><h1 className="ml-5 font1" ><img className="imageSize2  mr-2" src="https://i.imgur.com/y4cPYJN.png" alt=""/>Laptops & Computers</h1></a>
          <hr className="ml-5 size1"/>
          <a href={`/form/${this.props.id}/Other/Bestsellers`}><h1 className="ml-5 font1" ><img className="imageSize2  mr-2" src="https://i.imgur.com/y4cPYJN.png" alt=""/>Bestsellers</h1></a>
          <hr className="ml-5 size1"/>
          <a href={`/form/${this.props.id}/Other/HomeEntertainment`}><h1 className="ml-5 font1" ><img className="imageSize2  mr-2" src="https://i.imgur.com/y4cPYJN.png" alt=""/>Home Entertainment</h1></a>
          <hr className="ml-5 size1"/>
        </div>
        </div>
      </div>
    )
  }
}
export default SellCategories;
