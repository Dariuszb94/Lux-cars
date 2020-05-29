import {CHOOSEN_PRICE_MAX } from './types';
import {CHOOSEN_PRICE_MIN } from './types';


export const choosenPriceMin = (e) => dispatch => {
dispatch({
  type:CHOOSEN_PRICE_MIN,
  payload:e
});
};

export const choosenPriceMax = (e) => dispatch => {
    dispatch({
      type:CHOOSEN_PRICE_MAX ,
      payload:e
    });
    };
    