import React, {FC, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import './LoginPage.css';
import TextInput from "../common/TextInput/TextInput";
import SubmitButton from "../common/Button/Button";
import {Form, Formik} from "formik";
import {LoginValidationSchema} from "../validation/validationSchema";
import {UserType} from "../types/types";
import {bindActionCreators} from "redux";
import * as usersActions from "../redux/actions/usersActions";
import * as currentUserActions from "../redux/actions/currentUserActions";
import * as isAuthenticatedActions from "../redux/actions/isAuthenticatedActions";
import {connect} from "react-redux";
import getUserName from "../helpers/getUserName";
import {store} from "../index";

interface Props {
  actions: any,
  isAuthenticated: boolean
}

const LoginPage: FC<Props> = ({actions, isAuthenticated}: Props) => {
  const {users} = store.getState()
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])

  const handleLogin = (userData: UserType) => {
    actions
      .findUser(userData)

      .then(() => {
        actions
          .setCurrentUser({
            id: userData.id,
            name: getUserName(userData.id as string, users)
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
        className='login-page__form-wrapper'
      >
        <h1>
          Log in
        </h1>
        <Formik
          initialValues={{
            id: '',
            password: ''
          }}
          validationSchema={LoginValidationSchema}
          onSubmit={(formData) => handleLogin(formData)}
        >
          {
            ({errors, touched}) => (
              <Form
                className='login-page__form'
              >
                <TextInput
                  placeholder='Username'
                  name='id'
                  touched={touched.id}
                  errors={errors.id}
                />
                <TextInput
                  placeholder='Password'
                  type='password'
                  name='password'
                  touched={touched.password}
                  errors={errors.password}
                />
                <SubmitButton
                  className='login-page__button'
                  value='Log in'
                />
              </Form>
            )
          }

        </Formik>
      </div>
      <p
        className='login-page__footer'
      >
        Don't have an account?
        <Link
          to='/signup'
        >
          Sign up!
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
      findUser: bindActionCreators(usersActions.findUser, dispatch),
      setCurrentUser: bindActionCreators(currentUserActions.setCurrentUser, dispatch),
      setIsAuthenticated: bindActionCreators(isAuthenticatedActions.setIsAuthenticated, dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)
