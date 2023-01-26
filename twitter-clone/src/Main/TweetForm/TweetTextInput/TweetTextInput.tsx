import React from "react";
import {Field, useField} from "formik";

const TweetTextInput = () => {
  //const [field, meta] = useField()

  return (
    <Field
      type='textarea'
      name='text'
      placeholder="What's happening?"
    />
  )
}

export default TweetTextInput
