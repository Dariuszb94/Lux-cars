import { SORT_PRICE } from '../Actions/types';

const initialState = { priceSort: 'Descending' };

export default function (state = initialState, action) {
  switch (action.type) {
    case SORT_PRICE:
      return {
        ...state,
        priceSort: action.payload,
      };
    default:
      return state;
  }
}
