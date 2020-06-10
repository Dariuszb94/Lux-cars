import {CHOOSE_POWER_MAX } from './types';
import {CHOOSE_POWER_MIN } from './types';

export const choosePowerMin = payload => ({
  type:CHOOSE_POWER_MIN,
  payload,
});

export const choosePowerMax = payload => ({
    type:CHOOSE_POWER_MAX,
    payload,
  });