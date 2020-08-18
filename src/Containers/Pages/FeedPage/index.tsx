import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Push, push } from 'connected-react-router';
import { useHistory } from "react-router-dom";
import * as RestaurantAction from '../../../Actions/restaurantActions';

interface Props {
  
}

const Feed: React.FC<Props> = (props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(RestaurantAction.getAllRestaurants());
  }, [dispatch]);
  
  const restaurant = useSelector(
    (state: any) => state.restaurants.allRestaurants,
  );

  return(
    <div>

    </div>
  )


}