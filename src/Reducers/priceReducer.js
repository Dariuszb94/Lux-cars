import {PRICE_MAX} from '../Actions/types';
import {PRICE_MIN} from '../Actions/types';

const initialState ={
        priceMin: [1000,2000,5000,10000,15000,20000],
        priceMax: [25000,50000,100000,200000,300000,400000,500000],
       };
export default function(state = initialState, action) {

  switch (action.type) {
    case PRICE_MAX:
      return {
        ...state,
        priceMaxRead:action.payload
      };
 case PRICE_MIN:
      return {
        ...state,
        priceMinRead:action.payload
      };
      default: 
      return state;
  }
}