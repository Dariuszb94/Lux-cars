import { combineReducers } from "redux";
import chooseMakerReducer from "./chooseMakerReducer";
import chooseModelReducer from "./chooseModelReducer";
import choosePowerReducer from "./choosePowerReducer";
import chooseYearReducer from "./chooseYearReducer";
import choosePriceReducer from "./choosePriceReducer";
import choosePriceSortReducer from "./choosePriceSortReducer";
import chooseIdReducer from "./chooseIdReducer";

export default combineReducers({
  chosenMaker: chooseMakerReducer,
  chosenModel: chooseModelReducer,
  chosenPower: choosePowerReducer,
  chosenYear: chooseYearReducer,
  chosenPrice: choosePriceReducer,
  priceSort: choosePriceSortReducer,
  chosenId: chooseIdReducer,
});
