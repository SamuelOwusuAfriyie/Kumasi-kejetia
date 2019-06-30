import React from "react";
import "./UserItem.css";

class UserItem extends React.Component {
  constructor() {
    super();
    this.state = {
      displayEdit: "d-none",
      textButton: "Edit",
      title: "",
      description: "",
      contact: "",
      price: ""
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleToggle = (title, description, contact, price) => {

    this.state.displayEdit === "d-none"
      ? this.setState({
        displayEdit: "",
        textButton: "Cancel",
        title: title,
        description: description,
        contact: contact,
        price: price
      })
      : this.setState({
        displayEdit: "d-none",
        textButton: "Edit",
        title: title,
        description: description,
        contact: contact,
        price: price
      })
  }
  render() {
    return (
      <div>
        {this.props.data.map((item, index) => {
         if (this.props.path !== "/MyAccount/:_id" && item.image_id !== null) {
              if (item.user_id !== '5c2537a1829bfa21a3b42791') {

            return (
              <div key={index} className="spac">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <div className="row">
                      <div className="col-md-10 col-lg-6 col-12"><img src={item.image_url} alt='' className='img-responsive img-fluid '/></div>
                      <div className="col-md-10 col-lg-6 col-12">
                        <p className="card-text">{item.description}</p>
                        <p className="card-text">Price:
                          <samp className="bigP">{item.price}</samp>
                        </p>
                        <p className="card-text">Contact:
                          <samp className="bigP">{item.contact}</samp>
                        </p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          } else if (this.props.path === "/MyAccount/:_id") {
            return (
              <div key={index} className="spac">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <div className="row">
                      <div className="col-md-10 col-lg-6 col-12"><img src={item.image_url} alt='' className='w-100  img-responsive img-fluid '/></div>
                      <div className="col-md-10 col-lg-6 col-12">
                        <p className="card-text">{item.description}</p>
                        <p className="card-text">Price:
                          <samp className="bigP">{item.price}</samp>
                        </p>
                        <p className="card-text">Contact:
                          <samp className="bigP">{item.contact}</samp>
                        </p>
                        <button className="btn btn-danger" onClick={(e) => {
                          e.preventDefault();
                          this.props.removeItem(item._id)
                        }}>Delete</button>
                        <button className="btn btn-warning ml-3" onClick={(e) => {
                          e.preventDefault();
                          this.handleToggle(item.title, item.description, item.contact, item.price)
                        }}>{this.state.textButton}</button>
                      </div>
                    </div>
                    <div className={this.state.displayEdit}>
                      <form>
                        <div className="form-group container mt-3 w-75">
                          <input onChange={this.handleChange} className="form-control my-1" type="text" name="title" value={this.state.title} placeholder="Brand"/>
                          <textarea onChange={this.handleChange} className="form-control my-1" name="description" value={this.state.description} maxLength="300" maxRows="4"></textarea>
                          <input onChange={this.handleChange} className="form-control my-1" name="price" value={this.state.price} type="text" placeholder="Price"/>
                          <input onChange={this.handleChange} className="form-control my-1" name="contact" value={this.state.contact} type="text" placeholder="Contact"/>
                          <div className="d-flex">
                            <button type="submit" onClick={(e) => {
                              e.preventDefault();
                              this.props.updateItem(item._id, {
                                title: this.state.title,
                                description: this.state.description,
                                contact: this.state.contact,
                                price: this.state.price
                              });
                              this.handleToggle(item.title, item.description, item.contact, item.price)
                            }} className="btn btn-info form-control w-25 mx-auto mt-2">Submit</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )

          }
        })}
      </div>

    )
  }
}
export default UserItem;
