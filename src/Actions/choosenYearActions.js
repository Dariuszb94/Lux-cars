import {CHOOSEN_YEAR_MAX } from './types';
import {CHOOSEN_YEAR_MIN } from './types';

export const choosenYearMin = (e) => dispatch => {
    dispatch({
      type:CHOOSEN_YEAR_MIN,
      payload:e
    });
};

export const choosenYearMax = (e) => dispatch => {
    dispatch({
      type:CHOOSEN_YEAR_MAX ,
      payload:e
    });
};
    