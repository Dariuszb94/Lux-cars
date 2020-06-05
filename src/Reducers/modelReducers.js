import { UPDATE_MODEL} from '../Actions/types';

let initialState ={
 "Citroen": ["C5","C6","C4","C3","Saxo"],
 "Mercedes-Benz": ["W219","W204","W211","W221"],
 "BMW": ["F30","F31","F11"],
 "Dodge": ["Charger","Challenger"],
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