import {CHOOSE_ID} from './types';


export const chooseId = (updateId) => dispatch => {
dispatch({
  type:CHOOSE_ID,
  payload:updateId
});
};
