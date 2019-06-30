import React from "react";
import LoginForm4Account from "./LoginForm4Account.js";
import {withRouter} from 'react-router'
import {fetchItemLogin,setCookies} from './../../actions';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

class Login4AccountContainer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      email: "",
      emailValid: '',
      password: "",
      passwordValid: '',
      errorfield: {
        email: '',
        password: '',
      },
      submit: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validator(fieldName, fieldValue) {
    let emailValid = this.state.emailValid
    let passwordValid = this.state.passwordValid
    let errorfield = this.state.errorfield

    switch (fieldName) {
      case 'email':
        emailValid = fieldValue.match(/\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/)
        errorfield.email= emailValid ? true: 'your email is not valid' ;
        break;
      case 'password':
        passwordValid = fieldValue.length > 8;
        errorfield.password = passwordValid ? passwordValid = true: 'password is too short' ;
        console.log(passwordValid);
        break;
      default:

    }
    if(errorfield.email === true && errorfield.password === true){
      this.setState({submit:false},this.getlogger)
    }else {
      this.setState({submit:true})
    }

  }

getlogger(){
this.props.fetchItemLogin(this.state)
}

  handleChange(e) {
    e.persist();
    let fieldName = e.target.name;
    let fieldValue = e.target.value;


   this.validator(fieldName , fieldValue);
    this.setState({
      [e.target.name]: e.target.value
  })
}

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.props.logger);
    if(this.props.logger.length === 0){
      alert('Enter in a valid Password and Email');
    }
    if(this.props.logger.length===1 && !this.props.logger[0].comfirm){
      this.props.setCookies(this.props.logger[0]._id);
      this.props.history.push(`/ConfirmEmail4MyAccount/${this.props.logger[0].email}`);
      this.setState((prevState) => ({email: "", password: ""}));
    }
    if(this.props.logger.length===1 && this.props.logger[0].comfirm){
        this.props.setCookies(this.props.logger[0]._id).then(
    ()=>(this.props.history.push(`/MyAccount/${this.props.logger[0]._id}`))
    )
    }
  }

  render() {
if(this.props.auth === 'authorized'){
  return <Redirect to='/'/>
}else {
  return (<LoginForm4Account {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>)
}
  }
}

const mapStateToProps = state =>{
  const logger =state.post.items;
  const loggerInfo = logger?logger: null;
  const auth = state.auth.Auth
  const message = auth?auth.message:null
  console.log(state)
return{
    logger:loggerInfo,
    auth:message
}
}

export default connect(mapStateToProps,{fetchItemLogin, setCookies})(withRouter(Login4AccountContainer));
