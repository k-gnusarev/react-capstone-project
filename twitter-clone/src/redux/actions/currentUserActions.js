import * as types from "./actionTypes";
import {setIsAuthenticated} from "./isAuthenticatedActions";

export const setCurrentUser = (currentUser) => {
  return (dispatch) => {
    const storedUser = localStorage.getItem('currentUser')
    if (!storedUser && currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser))
      dispatch(setCurrentUserAction(currentUser))
    } else {
      dispatch(setCurrentUserAction(JSON.parse(storedUser)))
    }

    // if (storedUser) {
    //   dispatch(setIsAuthenticated(true))
    // }
  }
}

export const setCurrentUserAction = (currentUser) => {
  return {
    type: types.SET_CURRENT_USER,
    currentUser
  }
}
