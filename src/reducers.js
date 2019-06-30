import {combineReducers} from "redux";
import  posts  from './reducers/index.js'
import UserReducer from './reducers/UserReducer.js'
import authorizedReducer from './reducers/auth.js'

 const reducers = combineReducers({
  post:posts,
  user:UserReducer,
  auth:authorizedReducer
})

export default reducers
