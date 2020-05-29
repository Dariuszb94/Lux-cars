import {CHOOSEN_POWER_MAX} from '../Actions/types';
import {CHOOSEN_POWER_MIN} from '../Actions/types';

const initialState ={minPower:null, maxPower:null}

export default function(state = initialState, action) {

  switch (action.type) {
    case CHOOSEN_POWER_MAX:
      return {
        ...state,
maxPower:action.payload
      };
 case CHOOSEN_POWER_MIN:
      return {
        ...state,
minPower:action.payload
      };
      default: 
      return state;
  }
}