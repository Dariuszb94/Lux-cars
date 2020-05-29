import { CHOOSE_ID} from '../Actions/types';

const initialState ={choosenId:0};

export default function(state = initialState, action) {

  switch (action.type) {
    case CHOOSE_ID:
      return {
        ...state,
        choosenId:action.payload
      }
      default: 
      return state;
  }
}