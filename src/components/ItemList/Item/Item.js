import React from "react";
import "./Item.css";


let Item = (props) => (
  <div className="my-5">
  <div className="card w-50 m-auto p-4 ">
    <h4 className="card-title">{props.data.title}</h4>
    <img className="card-img-top" src={props.data.image} alt=""/>
    <div className="card-body">
      <p className="card-text">{props.data.description}</p>
      <p className="card-text">{props.data.price}</p>
      <p className="card-text">{props.data.contact}</p>
    </div>
  </div>
</div>
)

export default Item;
