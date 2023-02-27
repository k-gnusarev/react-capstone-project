import initialState from "./initialState";
import * as types from '../actions/actionTypes'

const usersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case types.LOAD_USERS: {
      return action.users
    }
    case types.ADD_USER: {
      const {user} = action
      return [
        ...state,
        user
      ]
    }
    case types.FIND_USER: {
      return [
        ...state
      ]
    }
    default:
      return state
  }
}

export default usersReducer
