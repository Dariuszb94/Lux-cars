import { CHOOSE_MODEL} from '../Actions/types';

const initialState ={choosenModel:"Any Model"};

export default function(state = initialState, action) {

  switch (action.type) {
    case   CHOOSE_MODEL:
      return {
        ...state,
        choosenModel:action.payload
      }
      default: 
      return state;
  }
}