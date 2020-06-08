import {CHOOSEN_POWER_MAX } from './types';
import {CHOOSEN_POWER_MIN } from './types';

export const choosenPowerMin = payload => ({
  type:CHOOSEN_POWER_MIN,
  payload,
});

export const choosenPowerMax = payload => ({
    type:CHOOSEN_POWER_MAX,
    payload,
  });