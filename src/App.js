import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import NavbarTog from "./components/NavbarTog";
import Welcome from "./components/Welcome";
import SellOptions from "./components/SellOptions";
import LoginForm from "./components/LoginForm";
import { BrowserRouter,Route, Switch} from "react-router-dom";
import FormContainer from './components/Form';
import SellCategories from "./components/SellCategories";
import Home from "./components/Home";
import MarketCenter from "./components/MarketCenter";
import SignUpForm from "./components/SignUpForm";
import ConfirmEmail  from "./components/ConfirmEmail";
import MyAccount from "./components/MyAccount";
import SignUpForm4Account from "./components/SignUpForm4Account";
import LoginForm4Account from "./components/LoginForm4Account";
import SelectImages from "./components/SelectImages";
import ConfirmEmail4MyAccount from './components/ConfirmEmail4MyAccount';
import Service from './components/Service';
import Footer from './components/Footer';
import "./components/bootstrap.css";
import "./components/bootstrap.min.css";
import  AdminPage from "./components/AdminPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NewHomeContainer from './components/NewHome';
import HowItWorks from './components/HowItWorks';
import ServiceDetails from './components/ServiceDetails';


class App extends Component{
  componentWillMount(){
    window.innerWidth > 800?  this.setState({toggleButton:'d-none' , mainNav:'d-block'}) : this.setState({toggleButton:'d-block' , mainNav:'d-none'})
  }
  componentDidMount(){
    window.innerWidth > 800? this.setState({toggleButton:'d-none' , mainNav:'d-block'}): this.setState({toggleButton:'d-block' , mainNav:'d-none'})
  }

  componentDidUnmount(){
    window.innerWidth > 800?  this.setState({toggleButton:'d-none' , mainNav:'d-block'}):this.setState({toggleButton:'d-block' , mainNav:'d-none'})
  }
  constructor(){
    super();
    this.state = {
      toggle:'d-none',
      mainNav: 'd-none',
      toggleButton:'d-none',
    }
    this.handleToggle = this.handleToggle.bind(this)
  }
  handleToggle(){
    this.state.toggle === 'd-none' ? this.setState({toggle:'d-block position-absolute myToggleNav'}):this.setState({toggle:'d-none'})
  }
  render(){
    return(
  <div className="App">
      <div>
          <Navbar mainNav = {this.state.mainNav}/>
      </div>

      <div className={this.state.toggle}>
        <NavbarTog />
      </div>

    <i className={`fas fa-bars ${this.state.toggleButton} myToggle`} onClick={this.handleToggle}></i>
      <div>
        <BrowserRouter>
        <Switch>
         <Route exact path="/" component={Home}/>
          <Route exact path='/buy/:category/:value' component={NewHomeContainer}/>
          <Route exact path='/buy/:category' component={NewHomeContainer}/>
          <Route exact path="/Welcome" component={Welcome}/>
          <Route exact path="/form/:id/:category/:name" component={FormContainer}/>
          <Route exact path="/LoginForm" component={LoginForm}/>
          <Route exact path="/SellOptions/:_id" component={SellOptions}/>
          <Route exact path="/SellCategories/:id" component={SellCategories}/>
          <Route exact path="/MarketCenter/:_id" component={MarketCenter}/>
          <Route exact path="/SignUpForm" component={SignUpForm}/>
          <Route exact path="/ConfirmEmail/:email" component={ConfirmEmail}/>
          <Route  path="/MyAccount/:_id" component={MyAccount}/>
          <Route exact path="/SignUpForm4Account" component={SignUpForm4Account}/>
          <Route exact path="/LoginForm4Account" component={LoginForm4Account}/>
          <Route exact path="/SelectImages" component={SelectImages}/>
          <Route exact path="/ConfirmEmail4MyAccount/:email" component={ConfirmEmail4MyAccount}/>
          <Route exact path="/Service" component={Service}/>
          <Route exact path="/MarketCenter/" component={MarketCenter}/>
          <Route exact path="/Admin/" component={AdminPage}/>
          <Route exact path="/HowItWorks" component={HowItWorks}/>
          <Route exact path="/ServiceDetails" component={ServiceDetails}/>

        </Switch>



      </BrowserRouter>
      </div>

      <Footer/>
  </div>
)
}
}

export default App;
