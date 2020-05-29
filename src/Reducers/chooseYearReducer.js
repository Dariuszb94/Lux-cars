import {CHOOSEN_YEAR_MAX} from '../Actions/types';
import {CHOOSEN_YEAR_MIN} from '../Actions/types';

const initialState ={minYear:null, maxYear:null}

export default function(state = initialState, action) {

  switch (action.type) {
    case CHOOSEN_YEAR_MAX:
      return {
        ...state,
maxYear:action.payload
      };
 case CHOOSEN_YEAR_MIN:
      return {
        ...state,
minYear:action.payload
      };
      default: 
      return state;
  }
}