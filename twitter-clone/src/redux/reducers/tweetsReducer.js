import initialState from "./initialState";
import * as types from "../actions/actionTypes";

const tweetsReducer = (state = initialState.tweets, action) => {
  switch (action.type) {
    case types.LOAD_TWEETS: {
      return action.tweets
    }
    case types.ADD_TWEET: {
      const {tweet} = action
      return [
        ...state,
        tweet
      ]
    }
    default:
      return state
  }
}

export default tweetsReducer
