import {BASE_URL} from "../helpers/constants";
import {handleError, handleResponse} from "./apiUtils";

export const getTweets = () => {
  return fetch(BASE_URL + 'tweets')
    .then(handleResponse)
    .catch(handleError)
}

export const addTweet = (tweet, author_id) => {
  const body = JSON.stringify({
    author_id,
    ...tweet
  })
  return fetch(BASE_URL + 'tweets', {
    method: 'POST',
    headers: {
      "content-type": "application/json"
    },
    body
  })
    .then(handleResponse)
    .catch(handleError)
}
