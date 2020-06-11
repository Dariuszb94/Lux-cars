import { CHOOSE_MODEL } from "../Actions/types";

const initialState = { chosenModel: "Any Model" };

export default function (state = initialState, action) {
  switch (action.type) {
    case CHOOSE_MODEL:
      return {
        ...state,
        chosenModel: action.payload,
      };
    default:
      return state;
  }
}
