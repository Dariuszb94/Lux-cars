import { CHOOSE_MAKER } from "./types";

const chooseMaker = (payload) => ({
  type: CHOOSE_MAKER,
  payload,
});
export default chooseMaker;
