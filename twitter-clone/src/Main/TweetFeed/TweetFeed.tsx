import React, {FC, useEffect} from "react";
import Tweet from "./Tweet/Tweet";
import './TweetFeed.css'
import {TweetType} from "../../types/types";

const TweetFeed: FC<{
  tweets: TweetType[]
}> = (props) => {
  const {tweets} = props;

  return (
    <div
      className='tweet-feed__container'
    >
      {tweets.map(
        tweet => <Tweet
          key={tweet.id}
          authorId={tweet.author_id}
          text={tweet.text}
          id={tweet.id}
        />
      )}
    </div>
  )
}

export default TweetFeed
