import { CHANGE_NAME } from "./types";

export const changeNameAction = (newName) => ({ type: CHANGE_NAME, payload: newName });