import { combineReducers } from "redux"
import main from "./main"

const rootReducer = combineReducers({
  main: main
})

export default rootReducer;

//combine all reducers into one. USEFUL when there are multiple reducers