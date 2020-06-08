import {CHOOSE_PRICE_MAX } from './types';
import {CHOOSE_PRICE_MIN } from './types';

export const choosePriceMin = payload => ({
      type:CHOOSE_PRICE_MIN,
      payload
});

export const choosePriceMax = payload => ({
      type:CHOOSE_PRICE_MAX ,
      payload
});
    