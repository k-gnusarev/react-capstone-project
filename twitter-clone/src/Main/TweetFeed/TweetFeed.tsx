import React from "react";
import Tweet from "./Tweet/Tweet";
import './TweetFeed.css'

const TweetFeed = () => {
  const tweets = [
    {
      id: '1',
      name: 'John Smith',
      text: `What are the pros of object-oriented programming?<br><br>Please, explain as if I\'m 5.`
    },
    {
      id: '2',
      name: 'Carla Notarobot',
      text: `Why use a debugger when you can fill your code with hundreds of <code>print()</code> statements?`
    },
    {
      id: '3',
      name: 'Amelia Warner',
      text: `Describe your relationship with JavaScript with one word.`
    },
    {
      id: '4',
      name: 'John Smith',
      text: `What are the pros of object-oriented programming?<br><br>Please, explain as if I\'m 5.`
    },
    {
      id: '5',
      name: 'Carla Notarobot',
      text: `Why use a debugger when you can fill your code with hundreds of <code>print()</code> statements?`
    },
    {
      id: '6',
      name: 'Carla Notarobot',
      text: `Why use a debugger when you can fill your code with hundreds of <code>print()</code> statements?`
    },
    {
      id: '7',
      name: 'Carla Notarobot',
      text: `Why use a debugger when you can fill your code with hundreds of <code>print()</code> statements?`
    },
    {
      id: '8',
      name: 'Carla Notarobot',
      text: `Why use a debugger when you can fill your code with hundreds of <code>print()</code> statements?`
    },
    {
      id: '9',
      name: 'Carla Notarobot',
      text: `Why use a debugger when you can fill your code with hundreds of <code>print()</code> statements?`
    },
  ]
  return (
    <div
      className='tweet-feed__container'
    >
      {tweets.map(
        tweet => <Tweet
          key={tweet.id}
          name={tweet.name}
          text={tweet.text}
          id={tweet.id}
        />
      )}
    </div>
  )
}

export default TweetFeed
