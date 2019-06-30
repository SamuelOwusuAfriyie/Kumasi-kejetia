import React from "react";
import MyAccount from "./MyAccount.js";
import {loadItemWithId,loadImageWithId, loadItem, loadImage, authorized,RemoveItem, updateItem} from "./../../actions/index.js";
import {connect} from "react-redux";
class MyAccountContainer extends React.Component {
  constructor() {
    super();
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  componentDidMount() {
    this.props.authorized()
    this.props.loadItemWithId(this.props.match.params._id)
    this.props.loadImageWithId(this.props.match.params._id);

  }
  handleRemoveItem(id){
    this.props.RemoveItem(id, this.props.match.params._id)

  }

  handleEdit(id,editItem){
    this.props.updateItem(id, this.props.match.params._id,editItem)

  }
  render() {

    return(
      <div>
        <MyAccount mypath={this.props.match.path} updateItem={this.handleEdit} RemoveItem={this.handleRemoveItem} userInfo={this.props.userInfo} UserItem={this.props.UserItem} userId={this.props.match.params._id} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {

   const postItem = state.post.userPost
   const userPost =  postItem ? postItem: null;
   const user = state.user.userInfo;
   const userInfo = user ?user[0]: {};
   console.log('userInfo',userInfo);
  return {
    UserItem: userPost,
    userInfo:userInfo
  }
}
export default connect(mapStateToProps,{loadItemWithId,loadImageWithId,authorized, RemoveItem, updateItem}) (MyAccountContainer);
