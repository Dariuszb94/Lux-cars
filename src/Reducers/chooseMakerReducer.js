import {CHOOSE_MAKER} from '../Actions/types';

const initialState ={maker:"Any Maker"};

export default function(state = initialState, action) {

  switch (action.type) {
    case CHOOSE_MAKER:
      return {
        ...state,
        maker:action.payload
      }
      default: 
      return state;
  }
}