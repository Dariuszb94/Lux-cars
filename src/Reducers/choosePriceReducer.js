import {CHOOSEN_PRICE_MAX} from '../Actions/types';
import {CHOOSEN_PRICE_MIN} from '../Actions/types';

const initialState ={minPrice:null, maxPrice:null}

export default function(state = initialState, action) {

  switch (action.type) {
    case CHOOSEN_PRICE_MAX:
      return {
        ...state,
maxPrice:action.payload
      };
 case CHOOSEN_PRICE_MIN:
      return {
        ...state,
minPrice:action.payload
      };
      default: 
      return state;
  }
}