import { CHOOSE_PRICE_MAX, CHOOSE_PRICE_MIN } from './types';

export const choosePriceMin = (payload) => ({
  type: CHOOSE_PRICE_MIN,
  payload,
});

export const choosePriceMax = (payload) => ({
  type: CHOOSE_PRICE_MAX,
  payload,
});
