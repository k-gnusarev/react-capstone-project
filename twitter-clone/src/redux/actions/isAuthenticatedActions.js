import * as types from "./actionTypes";

export const setIsAuthenticated = (isAuthenticated) => {
  return (dispatch) => {
    dispatch(setIsAuthenticatedAction(isAuthenticated))
  }
}

export const setIsAuthenticatedAction = (isAuthenticated) => {
  return {
    type: types.SET_IS_AUTHENTICATED,
    isAuthenticated
  }
}
