import * as t from "../types";

const main = (state = {
    name: "guest",
}, action) => {
  switch(action.type){
    case t.SET_NAME:
      return { 
        ...state,
        name: action.payload
      };
    default:
      return {...state};
    }
}

export default main;

//a reducer that will manage the main state of the app