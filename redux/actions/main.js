import * as t from "../types";
import axios from "axios";
//import { request } from "../../util/request";

export const setInfo = (name) => dispatch => {
  dispatch({
    type: t.SET_NAME,
    payload: name
  });
}

//Here we are dispatching an action
//specifies the set name type with a new name value