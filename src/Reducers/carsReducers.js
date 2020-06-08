import {CARS} from '../Components/Const/carsDefaultData'

const initialState = CARS;

export default function(state = initialState, action) {

  switch (action.type) {
    case  CARS:
      return {
        ...state,
        cars:action.payload
      }
      default: 
      return state;
  }
}