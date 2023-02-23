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
    default:
      return state
  }
}

export default usersReducer
