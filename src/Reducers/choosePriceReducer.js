import { CHOOSE_PRICE_MAX, CHOOSE_PRICE_MIN } from "../Actions/types";

const initialState = { minPrice: null, maxPrice: null };

export default function (state = initialState, action) {
  switch (action.type) {
    case CHOOSE_PRICE_MAX:
      return {
        ...state,
        maxPrice: action.payload,
      };
    case CHOOSE_PRICE_MIN:
      return {
        ...state,
        minPrice: action.payload,
      };
    default:
      return state;
  }
}
