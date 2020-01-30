import { combineReducers } from "redux"
import { activityReducer } from "./activityReducer"

export const rootReducer = combineReducers({
  activity: activityReducer
})
