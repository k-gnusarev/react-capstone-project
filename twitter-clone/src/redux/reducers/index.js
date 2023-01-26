import {combineReducers} from "redux";
import tweets from './tweetsReducer'
import users from './usersReducer'
import apiStatusReducer from "./apiStatusReducer";

const rootReducer = combineReducers({
  tweets,
  users,
  apiStatusReducer
})

export default rootReducer
