let defaultState = {
  Auth:null
}


const authorizedReducer = (state = defaultState,action)=>{
  switch (action.type) {
    case 'AUTHORIZED':
        return{
          Auth:action.payload
      }

      break;
    default:
    return state

  }
}

export default authorizedReducer
