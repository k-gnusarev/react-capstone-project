import React from "react";
import {Link} from "react-router-dom";
import Button from "../common/Button/Button";
import './SignupPage.css';
import TextInput from "../common/TextInput/TextInput";

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
        <form
          className='signup-page__form'
        >
          <TextInput
            placeholder='Email'
          />
          <TextInput
            placeholder='Password'
            type='password'
          />
          <TextInput
            placeholder='Username'
          />
          <TextInput
            placeholder='Full name'
          />
          <Button
            className='signup-page__button'
            type='submit'
            value='Sign up'
            onClick={handleSignup}
          />
        </form>
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
