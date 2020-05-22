import {UPDATE_MODEL } from './types';


export const updateModel = (updatedModel) => dispatch => {
dispatch({
  type:UPDATE_MODEL ,
  payload:updatedModel
});
};
