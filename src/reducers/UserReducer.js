let defaultState = {
  items: [],
  postItem: [],
  userInfo: [],
  loadAllItem:[],
  cart:[]
}

let mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "LOADUSER":
      return {
        userInfo: [
          ...state.userInfo,
          ...action.payload
        ],
        items:state.items,
        postItem:state.postItem,
        loadAllItem:state.laodAllItem,
        cart: state.cart

      }
      case "LOADALLPOST":
        return {
          items:state.items,
          postItem:state.postItem,
          userInfo:state.userInfo,
          cart: state.cart,

          loadAllItem:[...state.loadAllItem, ...action.payload]
              }
        case "PUTINCART":
        return {
          items:state.items,
          postItem:state.postItem,
          userInfo:state.userInfo,
          loadAllItem:state.laodAllItem,
          cart: action.payload.cart
        }
    default:
      return state;

}}

export default mainReducer;
