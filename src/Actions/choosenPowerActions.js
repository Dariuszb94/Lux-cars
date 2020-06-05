import {CHOOSEN_POWER_MAX } from './types';
import {CHOOSEN_POWER_MIN } from './types';

export const choosenPowerMin = (e) => dispatch => {
dispatch({
  type:CHOOSEN_POWER_MIN,
  payload:e
});
};

export const choosenPowerMax = (e) => dispatch => {
    dispatch({
      type:CHOOSEN_POWER_MAX ,
      payload:e
    });
    };
    