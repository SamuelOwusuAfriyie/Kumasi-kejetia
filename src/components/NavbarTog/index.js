import React from "react";
import NavbarTog from "./NavbarTog.js";
import {Link,withRouter} from "react-router-dom";



class NavbarTogContainer extends React.Component {
  render(){
    console.log(this.props.match.params)
    return (
      <div style={{zIndex:'4'}}>
        <NavbarTog/>
      </div>
    )
  }
}
export default withRouter(NavbarTogContainer);
