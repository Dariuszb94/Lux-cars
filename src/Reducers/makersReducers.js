import { READ_MAKERS} from '../Actions/types';

let initialState =["Citroen","Mercedes-Benz","BMW","Dodge"];

export default function(state = initialState, action) {

  switch (action.type) {
    case  READ_MAKERS:
      return {
        ...state,
        makers:action.payload
      }
      default: 
      return state;
  }
}