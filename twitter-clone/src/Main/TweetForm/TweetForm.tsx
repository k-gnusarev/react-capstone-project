import React from "react";
import './TweetForm.css'
import Button from "../../common/Button/Button";
import {ErrorMessage, Form, Formik} from "formik";
import TweetTextInput from "./TweetTextInput/TweetTextInput";
import {TweetValidationSchema} from "../../validation/validationSchema";
import SubmitButton from "../../common/Button/Button";

const TweetForm = () => {
  //const [field, meta] = useField()
  const handleSubmitTweet = (e: Event) => {
    e.preventDefault()
    console.log('tweet sent')
  }

  return (
    <Formik
      initialValues={{
        tweetText: ''
      }}
      validationSchema={TweetValidationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {
        ({errors, touched}) => {
          return (
            <Form
              className='container'
            >
              <TweetTextInput/>
              {touched.tweetText && errors.tweetText && <ErrorMessage name='tweetText'/>}
              <SubmitButton value='Tweet'/>
            </Form>
          )
        }
      }
    </Formik>
  )
}

export default TweetForm
