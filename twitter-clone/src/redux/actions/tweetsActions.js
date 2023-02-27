import * as types from './actionTypes'
import * as tweetsApi from '../../api/tweetsApi'

const loadTweetsAction = (tweets) => {
  return {
    type: types.LOAD_TWEETS,
    tweets
  }
}

const addTweetAction = (tweet) => {
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

export const addTweet = (tweet, authorId) => {
  return (dispatch) => {
    return tweetsApi
      .addTweet(tweet, authorId)
      .then((tweet) => {
        dispatch(addTweetAction(tweet))
      })
      .catch(error => {
        throw error
      })
  }
}
