import * as types from './actionTypes'
import * as tweetsApi from '../../api/tweetsApi'
import * as usersApi from "../../api/usersApi";

const loadTweetsAction = (tweets) => {
  return {
    type: types.LOAD_TWEETS,
    tweets
  }
}

const addTweetAction = (tweet) => {
  console.log(tweet)
  return {
    type: types.ADD_TWEET,
    tweet
  }
}

export const loadTweets = () => {
  return (dispatch) => {
    return tweetsApi
      .getTweets()
      .then(tweets => {
        dispatch(loadTweetsAction(tweets))
      })
      .catch(error => {
        throw error
      })
  }
}

export const addTweet = (tweet) => {
  return (dispatch) => {
    return tweetsApi
      .addTweet(tweet)
      .then((tweet) => {
        console.log(tweet)
        dispatch(addTweetAction(tweet))
      })
      .catch(error => {
        throw error
      })
  }
}
