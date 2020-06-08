import { UPDATE_MODEL} from '../Actions/types';

let initialState ={

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