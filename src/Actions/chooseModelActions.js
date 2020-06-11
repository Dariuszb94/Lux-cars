import { CHOOSE_MODEL } from "./types";

const chooseModel = (payload) => ({
  type: CHOOSE_MODEL,
  payload,
});
export default chooseModel;
