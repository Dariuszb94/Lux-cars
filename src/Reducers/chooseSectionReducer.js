import {CHOOSEN_SECTION} from '../Actions/types';


const initialState ="";

export default function(state = initialState, action) {

  switch (action.type) {
    case CHOOSEN_SECTION:
      return {
        ...state,
section:action.payload
      };

      default: 
      return state;
  }
}