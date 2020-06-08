import {SORT_PRICE } from './types';

export const choosenSortPrice = (e) => dispatch => {
    dispatch({
      type:SORT_PRICE ,
      payload:e
    });
};

