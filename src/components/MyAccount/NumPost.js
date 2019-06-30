import React from 'react';

class NumPost extends React.Component {
  render(){
    console.log('this.props.data',this.props.data);
    return(
      <div>
        <h2>You have posted {this.props.data.length} Items</h2>
      </div>
    )
  }
}

export default NumPost
