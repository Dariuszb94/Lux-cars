import {UPDATE_MAKER} from './types';

export const updateMaker = (updatedMaker) => dispatch => {
    dispatch({
      type:UPDATE_MAKER ,
      payload:updatedMaker
    });
};
