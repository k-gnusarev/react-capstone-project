import React from "react";
import {Link} from "react-router-dom";
import './SignupPage.css';
import TextInput from "../common/TextInput/TextInput";
import SubmitButton from "../common/Button/Button";
import {Form, Formik} from "formik";
import {SignupValidationSchema} from "../validation/validationSchema";

const SignupPage = () => {
  const handleSignup = () => {
    console.log('signup')
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
            login: '',
            password: '',
            fullName: '',
            username: ''
          }}
          validationSchema={SignupValidationSchema}
          onSubmit={(values) => console.log(values)}
        >
          {
            ({touched, errors}) => {
              return (
                <Form
                  className='signup-page__form'
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
                  <TextInput
                    placeholder='Username'
                    name='username'
                    touched={touched.username}
                    errors={errors.username}
                  />
                  <TextInput
                    placeholder='Full name'
                    name='fullName'
                    touched={touched.fullName}
                    errors={errors.fullName}
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

export default SignupPage
