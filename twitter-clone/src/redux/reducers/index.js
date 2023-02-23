import {combineReducers} from "redux";
import tweets from './tweetsReducer'
import users from './usersReducer'
import isAuthenticated from './isAuthenticatedReducer'
import currentUser from './currentUserReducer'

const rootReducer = combineReducers({
  tweets,
  users,
  currentUser,
  isAuthenticated
})

export default rootReducer
