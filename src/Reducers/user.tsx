//AJustar conforme for criando
const user = (state = [], action:any) => { 
  switch(action.type){ 
      case "SET_USER_INFO": 
      return {...state, userInfo: action.payload.info} 
  default: return state 
}} 
  export default user;