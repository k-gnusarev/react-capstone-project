import React from "react";
import {Field, useField} from "formik";

const TweetTextInput = () => {
  //const [field, meta] = useField()

  return (
    <Field
      type='textarea'
      name='tweetText'
      placeholder="What's happening?"
    />
  )
}

export default TweetTextInput
