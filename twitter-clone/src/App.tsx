import React, {useEffect, useState} from 'react';
import './App.css';
import LoginPage from "./LoginPage/LoginPage";
import {Route, Routes} from 'react-router-dom';
import SignupPage from "./SignupPage/SignupPage";
import Main from './Main/Main';
import NotFoundPage from "./common/NotFound/NotFoundPage";
import {bindActionCreators} from "redux";
import * as usersActions from './redux/actions/usersActions'
import {connect} from "react-redux";

function App(props: any) {
  const {actions, users} = props

  useEffect(() => {
    if (users.length === 0) {
      actions
        .loadUsers()
        .catch((error: any) => console.error(error))
    }
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />
        <Route
          path='/login'
          element={<LoginPage/>}
        />
        <Route
          path='/signup'
          element={<SignupPage/>}
        />
        <Route
          path='*'
          element={<NotFoundPage/>}
        />
      </Routes>
    </div>
  );
}

function mapStateToProps(state: any) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: {
      loadUsers: bindActionCreators(usersActions.loadUsers, dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
