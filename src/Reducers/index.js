import { combineReducers } from 'redux';
import modelReducers from './modelReducers';
import makerReducers from './makerReducers';
import chooseModelReducer from './chooseModelReducer';
import powerReducer from './powerReducer';
import choosePowerReducer from './choosePowerReducer';
import yearReducer from './yearReducer';
import chooseYearReducer from './chooseYearReducer';
import priceReducer from './priceReducer';
import choosePriceReducer from './choosePriceReducer';
import carsReducers from './carsReducers';
import choosePriceSortReducer from './choosePriceSortReducer';
import chooseIdReducer from './chooseIdReducer';
import chooseSectionReducer from "./chooseSectionReducer";
import makersReducers from "./makersReducers";
export default combineReducers({
models:modelReducers,
maker:makerReducers,
choosenModel:chooseModelReducer,
power:powerReducer,
choosenPower:choosePowerReducer,
years:yearReducer,
choosenYear:chooseYearReducer,
price:priceReducer,
choosenPrice:choosePriceReducer,
cars:carsReducers,
priceSort:choosePriceSortReducer,
id:chooseIdReducer,
section:chooseSectionReducer,
makers:makersReducers,
});