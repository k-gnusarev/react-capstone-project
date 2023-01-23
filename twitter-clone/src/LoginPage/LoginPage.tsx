import React from "react";
import {Link} from "react-router-dom";
import './LoginPage.css';
import TextInput from "../common/TextInput/TextInput";
import SubmitButton from "../common/Button/Button";
import {Form, Formik} from "formik";
import { LoginValidationSchema } from "../validation/validationSchema";

const LoginPage = () => {
  const handleLogin = () => {
    console.log('login')
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
            login: '',
            password: ''
          }}
          validationSchema={LoginValidationSchema}
          onSubmit={(values) => console.log(values)}
        >
          {
            ({errors, touched}) => (
              <Form
                className='login-page__form'
              >
                <TextInput
                  placeholder='Email'
                  name='login'
                  touched={touched.login}
                  errors={errors.login}
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

export default LoginPage
