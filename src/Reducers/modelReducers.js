import { UPDATE_MODEL} from '../Actions/types';

let initialState ={
 "Citroen": ["C5","C6","C4"],
 "Mercedes-Benz": ["CLS"],
 "BMW": [],
};

export default function(state = initialState, action) {

  switch (action.type) {
    case  UPDATE_MODEL:
      return {
        ...state,
        models:action.payload
      }
      default: 
      return state;
  }
}