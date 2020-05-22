import { combineReducers } from 'redux';
import modelReducers from './modelReducers';
import makerReducers from './makerReducers';
import chooseModelReducer from './chooseModelReducer';

export default combineReducers({
models:modelReducers,
maker:makerReducers,
choosenModel:chooseModelReducer
});