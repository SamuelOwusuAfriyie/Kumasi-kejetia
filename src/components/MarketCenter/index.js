import React from "react";
import MarketCenter from "./MarketCenter.js";
import {connect} from 'react-redux';
import {loadItem, loadallItems,loadImage,searchItem} from './../../actions/index.js';

class MarketCenterContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title : ''
    }

    this.handleSearchItem = this.handleSearchItem.bind(this);
    this.handleSearchCategory = this.handleSearchCategory.bind(this);
    this.showNumberOfItemPost = this.showNumberOfItemPost.bind(this);
  }
  componentWillMount(){
    this.props.loadImage();
    this.props.loadallItems();
  }
 handleSearchItem(e){
   e.persist();
   this.setState({[e.target.name]: e.target.value})
   this.props.searchItem(e.target.name,e.target.value);
 }

handleSearchCategory(categoryType) {
  this.props.searchItem("category",categoryType);
}

showNumberOfItemPost(category,arrList){
  let count = 0
  for (var i = 0; i < arrList.length; i++) {
    if(arrList[i].category === category){
      count = count + 1
    }
  }
  return count
}
  render() {
    return(
      <div>
        <MarketCenter allData={this.props.allData} showNumberOfItemPost={this.showNumberOfItemPost} handleSearchItem = {this.handleSearchItem} handleSearchCategory= {this.handleSearchCategory}  title={this.state.title} data={this.props.items}/>
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  const postItem = state.post.postItem
  console.log(state);
  const userPost =  postItem  ? postItem: []
  const postAllItem = state.user.loadAllItem
  const usersALLPost =  postAllItem  ? postAllItem: []
  return{
     items:userPost,
     allData:usersALLPost
  }


}
export default connect(mapStateToProps,{loadItem,loadallItems,loadImage,searchItem})(MarketCenterContainer);
