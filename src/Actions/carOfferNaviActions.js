import {CHOOSEN_SECTION} from './types';

export const choosenSection = (e) => dispatch => {
dispatch({
  type:CHOOSEN_SECTION,
  payload:e
});
};

