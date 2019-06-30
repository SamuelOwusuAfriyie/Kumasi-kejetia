let defaultState = {
  items: [],
  postItem:[],
  userInfo:[]
}

let mainReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_ITEMS":
      return {items:action.items}
      case "REMOVE_ITEM":
        return {
          items: state.items.filter((item, index) => index !== action.index)
        }
        case "SET_ITEMS":
          return action.items
          case "LOADPOST":
            return {
              postItem: action.payload
            }
            case "SET_ITEMS":
              return action.items
              case "LOADUSER":
                return {
                  userInfo: [...state.userInfo,...action.payload]
                }
                case "SET_ITEMS":
                  return action.items
                  case "USERLOADPOST":
                    return {
                      userPost: action.payload
                    }


      case "UPDATE_ITEM":
        return {
          items: state.items.map((item, index) => {
            if (index === action.index) {
              return {
                heading: action.heading,
                imgUrl: action.imgUrl,
                description: action.description
              }
            } else {
              return item;
            }
          })
        }
    default:
      return state;
  }
}

export default mainReducer;
