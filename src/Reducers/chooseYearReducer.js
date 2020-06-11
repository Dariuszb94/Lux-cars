import { CHOOSE_YEAR_MAX, CHOOSE_YEAR_MIN } from '../Actions/types';

const initialState = { minYear: null, maxYear: null };

export default function (state = initialState, action) {
  switch (action.type) {
    case CHOOSE_YEAR_MAX:
      return {
        ...state,
        maxYear: action.payload,
      };
    case CHOOSE_YEAR_MIN:
      return {
        ...state,
        minYear: action.payload,
      };
    default:
      return state;
  }
}
