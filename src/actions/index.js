import axios from "axios";
import uuid from 'uuid';

export function setItems(items) {
  return {type: "SET_ITEMS", items}
}

export function loadItem() {
  return (dispatch) => {

    return axios.get("/post").then((response) => {
      dispatch(setItems(response.data.data));
    }).catch((error) => {
      alert(error);
    });
  }
}

export function loadItemWithId(id) {
  return (dispatch) => {

    return axios.get(`/post/?_id=${id}`).then((response) => {
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
    return axios.get(`/postItems/?${itemField}=${itemValue}`).then((response) => {
      return dispatch({
        type:'LOADPOST',
        payload:response.data.data
      });
    }).catch((error) => {
      alert(error);
    });
  }
}
export function authorized() {
  return (dispatch)=>{
    return axios.post('/post/setcookies').then((response)=>{
    return  dispatch({
        type:"AUTHORIZED",
        payload:response.data
      })
    })
  }
}
export function logout() {
  return (dispatch)=>{
    return axios.post('/post/setcookies',{logout:true}).then((response)=>{
    return  dispatch({
        type:"AUTHORIZED",
        payload:response.data
      })
    })
  }
}
export function setCookies(id) {
  return (dispatch)=>{
    return axios.post(`/post/setcookies`,{_id:id}).then((response)=>{
      return   dispatch({
          type:"AUTHORIZED",
          payload:response.data
        })
    })
  }
}
// // export function searchItem(itemCategory,itemTitle) {
//   return (dispatch) => {
//     return axios.get(`/postItems/?categories=${itemValue}&& ti`).then((response) => {
//       dispatch({
//         type:'LOADPOST',
//         payload:response.data.data
//       });
//     }).catch((error) => {
//       alert(error);
//     });
//   }
// }

export function fetchItem(info) {
  return (dispatch) => {
    return axios.get(`/post/?email=${info}`).then((response) => {
      dispatch(setItems(response.data.data));
    }).catch((error) => {
      alert(error);
    });
  }
}


export function fetchItemLogin(info) {
  return (dispatch) => {
    return axios.get(`/post/?email=${info.email}&password=${info.password}`).then((response) => {
      dispatch(setItems(response.data.data));
    }).catch((error) => {
      alert(error);
    });
  }
}

export function putInCart(id){
  return (dispatch)=>{
    if(id === undefined){
      return axios.post('/postItems/countItem',{id:null}).then((res)=>{
        dispatch({
          type: 'PUTINCART',
          payload:res.data
        })
      })
    }else {

    return axios.post('/postItems/countItem',{id}).then((res)=>{
      dispatch({
        type: 'PUTINCART',
        payload:res.data
      })
    })
  }
  }
}


export function addItem(clientInfo) {
  return (dispatch) => {
    return axios.post("/post",clientInfo).then((response) =>{
      dispatch(setItems(response.data.data));
    }).catch((error) => {
      alert(error);
    });
  }
}
export function addNewItem(clientPost) {
  return (dispatch) => {
    return axios.post("/post/items",clientPost).then((response) =>{
      // dispatch(setItems(response.data.data));
    }).catch((error) => {
      alert(error);
    });
  }
}

export function addImageinfo(clientPost) {
  return (dispatch) => {
    return axios.post(`/postItems/itemInfo`,clientPost).then((response) =>{
    }).catch((error) => {
      alert(error);
    });
  }
}


export function loadImage(id) {
  return (dispatch) => {
    return axios.get(`/postItems`).then((response) =>{
      dispatch({
        type:'LOADPOST',
        payload:response.data.data
      });
    }).catch((error) => {
      alert(error);
    });
  }
}


export function loadallItems() {
  return (dispatch) => {
    return axios.get(`/postItems`).then((response) =>{
      dispatch({
        type:'LOADALLPOST',
        payload:response.data.data
      });
    }).catch((error) => {
      alert(error);
    });
  }
}

export function loadImageWithId(id) {
  return (dispatch) => {
    return axios.get(`/postItems/?user_id=${id}`).then((response) =>{
      dispatch({
        type:'USERLOADPOST',
        payload:response.data.data
      });

    }).catch((error) => {
      alert(error);
    });
  }
}




export function addImage(data,postObj,uid,) {
  return (dispatch) => {
    return axios.post(`/postItems/items/${uid}`, data, {
       				headers: {
       					'accept': 'application/json',
       					'Accept-Language': 'en-US,en;q=0.8',
       					'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
       				}
       			}).then((dispatch)=>(
              axios.post(`/postItems/itemInfo`,{...postObj,data:data})
              // addImageinfo()
            ))
  }
}

export function fetchItemAndUpdate(id,clientInfo) {
  return (dispatch) => {
    return axios.put(`/post/${id}`,clientInfo).then((response) =>{
      dispatch(setItems(response.data.data));
    }).catch((error) => {
      alert(error);
    });
  }
}
export function updateItem(id,userId,editItem) {
  return (dispatch) => {
    return axios.put(`/postItems/${id}`,editItem).then((response) => {
      return   dispatch(loadImageWithId(userId));
    }).catch((error) => {
      alert(error);
    });
  }
}

export function RemoveItem(id, userId) {
  return (dispatch) => {

    return axios.delete(`/postItems/${id}`).then((response) => {
      return   dispatch(loadImageWithId(userId));
    }).catch((error) => {
      alert(error);
    });
  }
}
