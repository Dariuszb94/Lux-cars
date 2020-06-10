import {CHOOSE_YEAR_MAX } from './types';
import {CHOOSE_YEAR_MIN } from './types';

export const chooseYearMin = (e) => dispatch => {
    dispatch({
      type:CHOOSE_YEAR_MIN,
      payload:e
    });
};

export const chooseYearMax = (e) => dispatch => {
    dispatch({
      type:CHOOSE_YEAR_MAX ,
      payload:e
    });
};
    