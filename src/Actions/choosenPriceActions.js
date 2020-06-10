import {CHOOSE_PRICE_MAX } from './types';
import {CHOOSE_PRICE_MIN } from './types';

export const choosePriceMin = (e) => dispatch => {
    dispatch({
      type:CHOOSE_PRICE_MIN,
      payload:e
    });
};

export const choosePriceMax = (e) => dispatch => {
    dispatch({
      type:CHOOSE_PRICE_MAX ,
      payload:e
    });
};
    