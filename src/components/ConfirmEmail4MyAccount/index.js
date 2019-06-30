import React from "react";
import ConfirmEmail4MyAccount from "./ConfirmEmail4MyAccount.js";
import {fetchItem , fetchItemAndUpdate} from './../../actions'
import {connect} from 'react-redux'

class ConfirmEmail4MyAccountContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      confirmCode: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount(){
      this.props.fetchItem(this.props.match.params.email)
  }
// componentWillMount(){
//   console.log(this.props.match.params.email);
//   this.props.fetchItem(this.props.match.params.email)
// }
// componentDidMount(){
//   console.log(this.props.match.params.email);
//
// }
  handleChange(e) {
    e.persist();
    this.setState((prevState) => ({
    [e.target.name]: e.target.value
    }));
  }
  handleSubmit(e){
    e.preventDefault()
    if(this.state.confirmCode === this.props.logger.id){
      this.props.fetchItemAndUpdate(this.props.logger._id ,{comfirm:'true'});
      this.props.history.push(`/MyAccount/${this.props.logger._id}`);
    }else {
      alert('incorrect comfirmation code')
    };
  };
  render() {
    console.log(this.props.logger);
    return(
      <div>
        <ConfirmEmail4MyAccount {...this.state} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      </div>
    )
  }
}

const mapStateToProps = state=>{
const logger = state.post.items
const loggerInfo = logger?logger[0]:null
return{
  logger:loggerInfo
}

}
export default connect(mapStateToProps,{fetchItem, fetchItemAndUpdate})(ConfirmEmail4MyAccountContainer);
