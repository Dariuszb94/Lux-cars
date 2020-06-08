import { UPDATE_MAKER} from '../Actions/types';

const initialState ={maker:"Any Maker"};

export default function(state = initialState, action) {

  switch (action.type) {
    case  UPDATE_MAKER:
      return {
        ...state,
        maker:action.payload
      }
      default: 
      return state;
  }
}