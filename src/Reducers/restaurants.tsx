import { Reducer } from 'redux';

interface RestaurantState {

  restaurant:string
}

const initialState = {

  allRestaurants: [],
 
}


const feed:Reducer = (state = initialState, action) => {
      switch(action.type) {
        case 'SET_ALL_RESTAURANTS':
            const restaurantList = action.payload.allRestaurants;
            return {
                  ...state, 
                    allRestaurants: restaurantList
                  };
      
        default:
            return state;
  }
}

export default feed;