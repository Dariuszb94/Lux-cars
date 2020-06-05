import {CHOOSE_MODEL} from './types';

export const chooseModel = (updatedModel) => dispatch => {
dispatch({
  type:CHOOSE_MODEL,
  payload:updatedModel
});
};
