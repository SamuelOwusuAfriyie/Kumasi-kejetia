import axios from "axios";
import uuid from 'uuid';

export function setItems(items) {
  return {type: "SET_ITEMS", items}
}

export function loadItem() {
  return (dispatch) => {

    return axios.get("http://localhost:9000/post").then((response) => {
      dispatch(setItems(response.data.data));
    }).catch((error) => {
      alert(error);
    });
  }
}

export function loadItemWithId(id) {
  return (dispatch) => {

    return axios.get(`http://localhost:9000/post/?_id=${id}`).then((response) => {
      dispatch({
        type:'LOADUSER',
        payload:response.data.data
      });
    }).catch((error) => {
      alert(error);
    });
  }
}




export function searchItem(itemField,itemValue) {
  return (dispatch) => {
    return axios.get(`http://localhost:9000/postItems/?${itemField}=${itemValue}`).then((response) => {
    dispatch(setItems(response.data.data));
    }).catch((error) => {
      alert(error);
    });
  }
}



export function fetchItem(info) {
  return (dispatch) => {
    return axios.get(`http://localhost:9000/post/?email=${info}`).then((response) => {
      console.log('fetchItem',response.data.data);
      dispatch(setItems(response.data.data));
    }).catch((error) => {
      alert(error);
    });
  }
}


export function fetchItemLogin(info) {
  return (dispatch) => {
    return axios.get(`http://localhost:9000/post/?email=${info.email}&password=${info.password}`).then((response) => {
      console.log('fetchItem',response.data.data);
      dispatch(setItems(response.data.data));
    }).catch((error) => {
      alert(error);
    });
  }
}


export function addItem(clientInfo) {
  return (dispatch) => {
    return axios.post("http://localhost:9000/post",clientInfo).then((response) =>{
      console.log(response.data.data);
      dispatch(setItems(response.data.data));
    }).catch((error) => {
      alert(error);
    });
  }
}
export function addNewItem(clientPost) {
  console.log(clientPost);
  return (dispatch) => {
    return axios.post("http://localhost:9000/post/items",clientPost).then((response) =>{
      // dispatch(setItems(response.data.data));
    }).catch((error) => {
      alert(error);
    });
  }
}

export function addImageinfo(clientPost) {
  return (dispatch) => {
    return axios.post(`http://localhost:9000/postItems/itemInfo`,clientPost).then((response) =>{
       console.log('response',response.data.data);
    }).catch((error) => {
      alert(error);
    });
  }
}


export function loadImage(id) {
  return (dispatch) => {
    return axios.get(`http://localhost:9000/postItems`).then((response) =>{
      dispatch({
        type:'LOADPOST',
        payload:response.data.data
      });
       console.log('response',response.data.data);
    }).catch((error) => {
      alert(error);
    });
  }
}

export function loadImageWithId(id) {
  return (dispatch) => {
    return axios.get(`http://localhost:9000/postItems/?user_id=${id}`).then((response) =>{
      dispatch({
        type:'USERLOADPOST',
        payload:response.data.data
      });
       console.log('response',response.data.data);
    }).catch((error) => {
      alert(error);
    });
  }
}




export function addImage(data,postObj,uid,) {
  return (dispatch) => {
    console.log(uid);
    return axios.post(`http://localhost:9000/postItems/items/${uid}`, data, {
       				headers: {
       					'accept': 'application/json',
       					'Accept-Language': 'en-US,en;q=0.8',
       					'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
       				}
       			}).then((dispatch)=>(
              axios.post(`http://localhost:9000/postItems/itemInfo`,postObj)
              // addImageinfo()
            ))
  }
}

export function fetchItemAndUpdate(id,clientInfo) {
  return (dispatch) => {
    return axios.put(`http://localhost:9000/post/${id}`,clientInfo).then((response) =>{
      dispatch(setItems(response.data.data));
    }).catch((error) => {
      alert(error);
    });
  }
}

export function removeItem(index) {
  return {
    type: "REMOVE_ITEM",
    index
  }
}
