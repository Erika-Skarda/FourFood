import { push, replace } from "connected-react-router";
import { routes } from "../Containers/Router/index";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { baseUrl, getToken} from "../Utils/constants"
import axios from 'axios';
import { setMessage } from "./index";


export const redirectLogin = () => async (
  dispatch: (
    arg0: import("connected-react-router").CallHistoryMethodAction<[any]>
  ) => void
) => {
  try {
    dispatch(push(routes.login));
  } catch (err) {
    alert("Erro no redirecionamento");
  }
};
export const login = (
  email:string, 
  password:string) => async(dispatch: (arg0: import("connected-react-router").CallHistoryMethodAction<[any]>) => void) => {
  const body = {
      email,
      password
  }
  try {

      const response = await axios.post(`${baseUrl}/login`, body)
      localStorage.setItem("token", response.data.token)
    
      if(response.data.user.hasAddress ) {
          dispatch(replace(routes.feed))
      } else {
          dispatch(push(routes.myadress))
      }
  } catch(error){
    console.error(error.response)
    // dispatch(setMessage("Não foi possivel criar cadastrar o usuário, tente novamente mais tarde !", "red"))
  }
}


