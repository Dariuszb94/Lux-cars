import {SORT_PRICE } from './types';

export const chooseSortPrice = (e) => dispatch => {
    dispatch({
      type:SORT_PRICE ,
      payload:e
    });
};

