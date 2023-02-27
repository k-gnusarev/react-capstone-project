import React from "react";
import {Field} from "formik";

const TweetTextInput = () => (
    <Field
      type='textarea'
      name='text'
      placeholder="What's happening?"
    />
  )

export default TweetTextInput
