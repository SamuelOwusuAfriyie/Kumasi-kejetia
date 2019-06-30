import React,{Component} from 'react';
import NewHome from './NewHome.js'
import {connect} from 'react-redux'
import {loadImage} from './../../actions/index.js'

class NewHomeContainer extends Component{
  componentDidMount(){
    this.props.loadImage();
    console.log(this.props.match.params);
  }
  render(){
    if(this.props.state === null){
      return(
        <p> loading</p>
      )
    }else {
    console.log(this.props.state);
     let value = this.props.match.params.value? this.props.match.params.value:''
      return(
        <div>
          <div>
            <NewHome items={this.props.state} value={value.toLowerCase()}/>
          </div>
        </div>
      )

    }
  }
}

const mapSateToProps= (state ,props)=>{
  const post = state.post.postItem
  const postarr = post?post.map((item)=>{
    if(props.match.params.category === 'allcategory'){
        return item
    } else if(item.category === props.match.params.category ){
      return item
    }
  }) : null
  console.log(postarr);
  return{
    state:postarr
  }
}

export default connect(mapSateToProps,{loadImage})(NewHomeContainer)
