import React from "react";
import ItemList from "./ItemList.js";
import {connect} from "react-redux";
import {loadItem} from "../../actions";

class ItemListContainer extends React.Component {

componentDidMount(){

}
  render() {
    console.log(this.props.items);
    return (
      <div>
        <ItemList data={this.props.items} />
      </div>
    )
  }
}

export default connect(null, {loadItem})(ItemListContainer);
