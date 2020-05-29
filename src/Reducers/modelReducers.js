import { UPDATE_MODEL} from '../Actions/types';

const initialState ={
 "Citroen": ["C5", "C6", "XM"],
 "Mercedes-Benz": ["CLS W218", "CLS W219", "W219"],
 "BMW": ["E46", "F30", "F10"],
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