import { CHOOSE_ID } from './types';

const chooseId = (payload) => ({
  type: CHOOSE_ID,
  payload,
});
export default chooseId;
