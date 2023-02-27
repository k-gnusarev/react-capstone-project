import React, {FC, useEffect, useState} from "react";
import Tweet from "./Tweet/Tweet";
import './TweetFeed.css'
import {TweetType} from "../../types/types";
import {bindActionCreators} from "redux";
import * as tweetsActions from "../../redux/actions/tweetsActions";
import {connect} from "react-redux";
import Loader from "../../common/Loader/Loader";

const TweetFeed: FC<{
  tweets: TweetType[],
  isAuthenticated: boolean,
  actions: any
}> = (props) => {
  const {actions, tweets, isAuthenticated} = props;
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isAuthenticated) {
      actions
        .loadTweets()
        .then(() => {
          setIsLoading(false)
        })
        .catch((error: Error) => console.error(error))
    }
  }, [])
  return (
    <div
      className='tweet-feed__container'
    >
      {isLoading ?
        <Loader/> :
        tweets
          .map(tweet => {
            return (
              <Tweet
                key={tweet.id}
                authorId={tweet.author_id as string}
                text={tweet.text}
                id={tweet.id as string}
              />
            )
          })
          .reverse()
      }
    </div>
  )
}

function mapStateToProps(state: any) {
  return {
    tweets: state.tweets,
    isAuthenticated: state.isAuthenticated
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: {
      loadTweets: bindActionCreators(tweetsActions.loadTweets, dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetFeed);

