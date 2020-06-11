import { CHOOSE_ID } from '../Actions/types';

const initialState = { chosenId: 0 };

export default function (state = initialState, action) {
  switch (action.type) {
    case CHOOSE_ID:
      return {
        ...state,
        chosenId: action.payload,
      };
    default:
      return state;
  }
}
