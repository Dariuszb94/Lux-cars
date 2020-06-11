import { CHOOSE_YEAR_MAX, CHOOSE_YEAR_MIN } from './types';

export const chooseYearMin = (payload) => ({
  type: CHOOSE_YEAR_MIN,
  payload,
});

export const chooseYearMax = (payload) => ({
  type: CHOOSE_YEAR_MAX,
  payload,
});
