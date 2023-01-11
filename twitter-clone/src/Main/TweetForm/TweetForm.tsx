import React from "react";
import './TweetForm.css'
import TextInput from "../../common/TextInput/TextInput";
import Button from "../../common/Button/Button";

const TweetForm = () => {
  const handleSubmitTweet = (e: Event) => {
    e.preventDefault()
    console.log('tweet sent')
  }

  return (
    <form className='container'>
      <textarea
        id='tweetTextField'
        placeholder="What's happening?"
      />
      <Button type='submit' value='Tweet' onClick={handleSubmitTweet} />
    </form>
  )
}

export default TweetForm
