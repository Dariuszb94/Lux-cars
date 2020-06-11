import { SORT_PRICE } from './types';

const chooseSortPrice = (payload) => ({
  type: SORT_PRICE,
  payload,
});
export default chooseSortPrice;
