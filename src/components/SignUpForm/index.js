import React from "react";
import SignUpForm from "./SignUpForm.js";
import {addItem} from "./../../actions/index.js";
import {connect} from "react-redux"

class SignUpFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      surName: "",
      email: "",
      city: "",
      emailValid: "",
      password: "",
      passwordValid: "",
      firstNameValid: "",
      surNameValid: "",
      cityValid: "",
      confirmPassword: "",
      confirmPasswordValid: "",
      errorfield: {
        email: "",
        password: "",
        firstName: "",
        surName:'',
        city: '',
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
    let firstNameValid = this.state.firstNameValid;
    let surNameValid = this.state.surNameValid;
    let cityValid = this.state.cityValid;

    switch (fieldName) {
      case 'email':
        emailValid = fieldValue.match(/\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6}/)
        errorfield.email= emailValid ? true: 'your email is not valid' ;
        break;
      case 'password':
        passwordValid = fieldValue.length > 8;
        errorfield.password = passwordValid ? passwordValid = true: 'password is too short' ;
        break;
        case 'firstName':
          firstNameValid = fieldValue.length > 8;
          errorfield.firstName = firstNameValid ? firstNameValid = true: 'firstName is too short' ;
          break;
          case 'surName':
            surNameValid = fieldValue.length >2 && fieldValue === '';
            errorfield.surName = surNameValid ? surNameValid = true: 'surName is too short' ;
            break;
            case 'city':
              cityValid = fieldValue.length >1 && fieldValue === '';
              errorfield.city = cityValid ? cityValid = true: 'City is too short' ;
        break;
      default:

    }
    if(errorfield.email === true && errorfield.password === true){
      this.setState({submit:false})
    }else {
      this.setState({submit:true})
    }
  }

  handleChange(e) {
    e.persist();
    let fieldName = e.target.name;
    let fieldValue = e.target.value;
    this.setState({
      [e.target.name]: e.target.value
    }, this.validator(fieldName, fieldValue));
  }
  handleSubmit(e) {
    e.preventDefault();
    let max = 1234;
    let min = 9889;
    const id = Math.random() * (+max - +min) + +min;
    const clientInfo = {
      firstName: this.state.firstName,
      surName: this.state.surName,
      email: this.state.email,
      password: this.state.password,
      city: this.state.city,
      id:id,
      comfirm:false,
    }
    if(this.state.password !== this.state.confirmPassword){
      alert('passwords does not match')
    }else if(this.state.firstName === '' ||this.state.firstName === ' ' ){
      alert('Invalid firstName')
    }else if(this.state.surName === '' || this.state.surName === ' '){
      alert('Invalid surName')
    }else if(this.state.city === '' || this.state.city === '') {
      alert("Invalid")
    }else {
      this.props.addItem(clientInfo);
      this.props.history.push(`/ConfirmEmail/${this.state.email}`);
      this.setState((prevState) => ({email: "", password: ""}));
    }
  }
  render() {
    return(
      <div>
      <SignUpForm {...this.state} onChange={this.handleChange} handleSubmit={this.handleSubmit}/>
    </div>
    )
  }
}


export default connect(null,{addItem})(SignUpFormContainer);
