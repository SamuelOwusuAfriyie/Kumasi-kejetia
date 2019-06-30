import React from "react";
import "./Form.css";

let Form = (props) => (
  <form onSubmit={props.handleSubmit}>
    <div>
      <div className="container form w-75">
        <div className="row py-5  form-group">
          <input name="image" onChange={props.handleImage} type="file" className="form-control"/>
        </div>

        <h1 className="fdFont">Fill in details</h1>
        <hr/>
        <p>Condition</p>
        <div className="row">
          <div className="col-5">
            <label className="mr-2">Used</label><input type="radio"  name='condition' value='used' onChange={props.handleChange}/>
          </div>
          <div className="col-5">
            <label className="mr-2">New</label><input type="radio" name='condition' value='new' onChange={props.handleChange}/>
          </div>
        </div>
        {/*brand section  */}
        <div className="row">
          <div className="col-5 form-group">
            <input className="form-control" name='title' value={props.title} placeholder="Enter item brand" type="text"   onChange={props.handleChange}/>
          </div>
          {
            props.id === '5c2537a1829bfa21a3b42791' ? <div className="col-5 form-group">
                   <input className="form-control" name='categoryTitle' value={props.categoryTitle} placeholder="category title" type="text"   onChange={props.handleChange}/>
                 </div>: <div></div>
          }
        </div>
        <p>Authencity</p>
        <hr/>
        <div className="row">
          <div className="col-5">
            <label className="mr-2">Original</label><input type="radio"  name='authencity' value='original' onChange={props.handleChange}/>
          </div>
          <div className="col-3">
            <label className="mr-2">Replica</label><input type="radio"  name='authencity' value='replica' onChange={props.handleChange}/>
          </div>
        </div>
        <textarea className="w-50 h-5 py-2 px-3" rows="7" maxLength="300" name="description" value={props.description} onChange={props.handleChange} placeholder="Description" type="text"></textarea>
        <p className="mt-5">Price(GH₵)</p>
        <div className="row">
          <div className="col-3 form-group">
            <input className="form-control" placeholder="Price(GH₵)" type="number" name="price" value={props.price} onChange={props.handleChange}/>
          </div>
          <div className="col-3 form-group">
            <input type="checkbox" name='negotiable' value={props.negotiable} onChange={props.handleChange} />
            <label>Negotiable</label>
          </div>
        </div>
        <h1 className="mt-5 fdFont">Contact details</h1>
        <hr/>
        <div>
          <p>Phone number</p>
          <hr/>
          <div className="form-group">
            <input className="form-control px-4 py-4 w-25" placeholder="Contact number" name="contact"  onChange={props.handleChange} value={props.contact}/>
          </div>
        </div>
        <div className="row form-group ">
          <button type="submit" className="form-control btn btn-info w-25 py-2 m-auto" onClick={props.handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  </form>
)
export default Form;
