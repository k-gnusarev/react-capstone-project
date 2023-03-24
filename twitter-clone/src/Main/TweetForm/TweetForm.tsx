import React, {FC} from "react";
import './TweetForm.css'
import {ErrorMessage, Form, Formik} from "formik";
import TweetTextInput from "./TweetTextInput/TweetTextInput";
import {TweetValidationSchema} from "../../validation/validationSchema";
import SubmitButton from "../../common/Button/Button";
import {bindActionCreators} from "redux";
import * as tweetsActions from "../../redux/actions/tweetsActions";
import {connect} from "react-redux";
import {TweetType, UserType} from "../../types/types";

interface Props {
  currentUser: UserType
  actions: any
}

const TweetForm: FC<Props> = ({
  currentUser,
  actions
}: Props) => {
  const handleSubmitTweet = (tweetData: TweetType) => {
    actions
      .addTweet(tweetData, currentUser.id)
      .catch((error: Error) => {
        console.error(error)
      })
  }

  return (
    <Formik
      initialValues={{
        text: ''
      }}
      validationSchema={TweetValidationSchema}
      onSubmit={(formData, {resetForm}) => {
        handleSubmitTweet(formData)
        resetForm()
      }}
    >
      {
        ({errors, touched}) => {
          return (
            <Form
              className='container'
            >
              <TweetTextInput/>
              {touched.text && errors.text && <ErrorMessage name='tweetText'/>}
              <SubmitButton value='Tweet'/>
            </Form>
          )
        }
      }
    </Formik>
  )
}

function mapStateToProps(state: any) {
  return {
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: {
      addTweet: bindActionCreators(tweetsActions.addTweet, dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetForm);

