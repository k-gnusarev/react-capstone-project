import React from "react";
import {Link} from "react-router-dom";
import Button from "../common/Button/Button";
import './LoginPage.css';
import TextInput from "../common/TextInput/TextInput";

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
        <form
          className='login-page__form'
        >
          <TextInput
            placeholder='Username'
          />
          <TextInput
            placeholder='Password'
            type='password'
          />
          <Button
            className='login-page__button'
            type='submit'
            value='Log in'
            onClick={handleLogin}
          />
        </form>
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
