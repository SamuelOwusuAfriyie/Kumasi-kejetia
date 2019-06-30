import React from "react";
import Item from "./Item.js";
class ItemContainer extends React.Component {
  render() {
    return (<Item data={this.props.data} {...this.props}/>)
  }
}

export default ItemContainer;
