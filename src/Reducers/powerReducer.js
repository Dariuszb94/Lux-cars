import {POWER_MAX} from '../Actions/types';
import {POWER_MIN} from '../Actions/types';

const initialState ={
        powerMin: [20,40,60,80,100,120,150,200],
        powerMax: [220,240,260,280,300,350,400,450,500,550,600],
       };
export default function(state = initialState, action) {

  switch (action.type) {
    case POWER_MAX:
      return {
        ...state,
        powerMaxRead:action.payload
      };
 case POWER_MIN:
      return {
        ...state,
        powerMinRead:action.payload
      };
      default: 
      return state;
  }
}