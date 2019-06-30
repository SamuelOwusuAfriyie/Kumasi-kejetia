import React from "react";
import SellCategories from "./SellCategories.js";
import AdminSellCategories from "./AdminSellCategories.js";

class SellCategoriesContainer extends React.Component {
  render() {
  if(this.props.match.params.id === '5c2537a1829bfa21a3b42791'){
    return(
      <AdminSellCategories id={this.props.match.params.id}/>
    )
  }else {
    return (
      <div>
        <SellCategories id={this.props.match.params.id}/>
      </div>
    )
  }
  }
}
export default SellCategoriesContainer;
