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
  actions: any
}> = (props) => {
  const {actions, tweets} = props;
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    actions
      .loadTweets()
      .then(() => {

        console.log(tweets)
        setIsLoading(false)
      })
      .catch((error: any) => console.error(error))
  }, [])
  return (
    <div
      className='tweet-feed__container'
    >
      {isLoading ?
        <Loader/> :
        tweets
          .map(tweet => (
            <Tweet
              key={tweet.id}
              authorId={tweet.author_id}
              text={tweet.text}
              id={tweet.id}
            />
          ))
          .reverse()
      }
    </div>
  )
}

function mapStateToProps(state: any) {
  return {
    tweets: state.tweets
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

