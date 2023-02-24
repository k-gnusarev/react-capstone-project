import React, {FC, useContext, useEffect} from "react";
import {Link, redirect, useNavigate} from "react-router-dom";
import './SignupPage.css';
import TextInput from "../common/TextInput/TextInput";
import SubmitButton from "../common/Button/Button";
import {Form, Formik} from "formik";
import {SignupValidationSchema} from "../validation/validationSchema";
import {bindActionCreators} from "redux";
import * as usersActions from "../redux/actions/usersActions";
import * as currentUserActions from "../redux/actions/currentUserActions";
import * as isAuthenticatedActions from "../redux/actions/isAuthenticatedActions";
import {connect} from "react-redux";
import {UserType} from "../types/types";
import * as types from '../redux/actions/actionTypes'
import {store} from "../index";
import {setIsAuthenticated} from "../redux/actions/isAuthenticatedActions";

const SignupPage: FC<{
  actions: any,
  currentUser: boolean,
  isAuthenticated: boolean
}> = (props) => {
  const {actions, currentUser} = props
  const navigate = useNavigate()

  useEffect(() => {
    if (props.isAuthenticated) {
      navigate('/')
    }
  }, [props.isAuthenticated])

  const handleSubmit = (userData: UserType) => {
    actions
      .addUser(userData)
      .then(() => {
        actions
          .setCurrentUser({
            id: userData.id,
            name: userData.name
          })

        actions
          .setIsAuthenticated(true)

      })
      .catch((error: Error) => {
        console.error(error)
      })
  }

  return (
    <>
      <div
        className='signup-page__form-wrapper'
      >
        <h1>
          Sign up
        </h1>
        <Formik
          initialValues={{
            email: '',
            password: '',
            name: '',
            id: ''
          }}
          validationSchema={SignupValidationSchema}
          onSubmit={(formData) => handleSubmit(formData)}
        >
          {
            ({touched, errors}) => {
              return (
                <Form
                  className='signup-page__form'
                >

                  <TextInput
                    placeholder='Email'
                    name='email'
                    touched={touched.email}
                    errors={errors.email}
                  />
                  <TextInput
                    placeholder='Password'
                    type='password'
                    name='password'
                    touched={touched.password}
                    errors={errors.password}
                  />
                  <TextInput
                    placeholder='Username'
                    name='id'
                    touched={touched.id}
                    errors={errors.id}
                  />
                  <TextInput
                    placeholder='Full name'
                    name='name'
                    touched={touched.name}
                    errors={errors.name}
                  />
                  <SubmitButton
                    className='signup-page__button'
                    value='Sign up'
                  />
                </Form>
              )
            }

          }
        </Formik>
      </div>
      <p
        className='signup-page__footer'
      >
        Already have an account?
        <Link
          to='/login'
        >
          Log in!
        </Link>
      </p>
    </>
  )
}

function mapStateToProps(state: any) {
  return {
    user: state.user,
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: {
      addUser: bindActionCreators(usersActions.addUser, dispatch),
      setCurrentUser: bindActionCreators(currentUserActions.setCurrentUser, dispatch),
      setIsAuthenticated: bindActionCreators(isAuthenticatedActions.setIsAuthenticated, dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupPage);

