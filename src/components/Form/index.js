import React from "react";
import ItemContainer from "./../ItemList/Item/index.js";
import Form from "./Form.js"
import {connect} from "react-redux";
import {addNewItem, addImageinfo, loadItem, addImage} from "./../../actions/index.js";
import uuid from 'uuid';

class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      image: null,
      description: "",
      brand: '',
      contact: "",
      negotiable: "",
      price: "",
      category: "",
      categoryType: '',
      categoryTitle:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImage = this.handleImage.bind(this);
  }

  componentWillMount() {
    this.props.loadItem();
  }

  handleSubmit = (e) => {
    e.preventDefault() // <-- missing this
    const data = new FormData();
    data.append('profileImage', this.state.image, this.state.image.name);

    const uid = uuid();
    const postObj = {
      title: this.state.title,
      description: this.state.description,
      brand: this.state.brand,
      contact: this.state.contact,
      negotiable: this.state.negotiable,
      price: this.state.price,
      image_id: uid,
      category: this.props.match.params.category,
      categoryType: this.props.match.params.name,
      user_id: this.props.match.params.id,
      image_url: `/profileImage-${uid}.jpg`

    }
    this.props.addImage(data, postObj, postObj.image_id);
    this.setState({
      title: "",
      description: "",
      brand: '',
      contact: "",
      negotiable: "",
      price: ""
    })
    // this.props.addImageinfo(postObj);
  }

  handleImage = (e, err) => {
    const file = e.target.files[0];

    this.setState({image: e.target.files[0]});
  }

  handleChange = (e) => {
    switch (e.target.name) {
      case 'image':
        this.setState({image: e.target.files[0]});
        break;
      default:
        this.setState({
          [e.target.name]: e.target.value,
          category: this.props.match.params.category,
          categoryType: this.props.match.params.name
        });
    }
  }

  render() {
    const itemsMaped = () => {
      const list = []
      for (var i = 0; i < this.props.items.length; i++) {
        if (i === this.props.items.length - 1) {
          return (<ItemContainer key={i}  data={this.props.items[i]}/>)
        }
      }
    }

    return (
      <div>
        {itemsMaped()}
        <p className="paraLeft">
          Enter the details of your {this.props.match.params.name}</p>

        <Form {...this.state} id={this.props.match.params.id} handleChange={this.handleChange} handleImage={this.handleImage} uploadimage ={this.uploadimage} handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {items: [state]}
}
export default connect(mapStateToProps, {addNewItem, addImageinfo, loadItem, addImage})(FormContainer);
