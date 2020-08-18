import { push, replace } from "connected-react-router";
import { routes } from "../Containers/Router/index";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { baseUrl, getToken} from "../Utils/constants"
import axios from 'axios';
import { Dispatch } from 'redux';

//FUNÇÕES SINCRONAS
interface Restaurant {

  restaurant:string
}
export const setAllRestaurants = (allRestaurants:Restaurant[]) => ({
  type: 'SET_ALL_RESTAURANTS',
  payload: {
      allRestaurants,
  }
})


//FUNÇÕES ASSINCRONAS

export const getAllRestaurants = () => async (dispatch:Dispatch) => {

  const config = {
      headers: {
          'auth': getToken()
      }
  }
  try{
      const response = await axios.get(`${baseUrl}/restaurants`,
      config)
      dispatch(setAllRestaurants(response.data.restaurants))
      
  }catch(error){
      console.log(error)
  }
}