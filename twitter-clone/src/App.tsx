import React, {useEffect, useState} from 'react';
import './App.css';
import LoginPage from "./LoginPage/LoginPage";
import {Route, Routes, useNavigate} from 'react-router-dom';
import SignupPage from "./SignupPage/SignupPage";
import Main from './Main/Main';
import NotFoundPage from "./common/NotFound/NotFoundPage";
import {bindActionCreators} from "redux";
import * as usersActions from './redux/actions/usersActions'
import * as currentUserActions from './redux/actions/currentUserActions'
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/actions/currentUserActions";
import * as isAuthenticatedActions from "./redux/actions/isAuthenticatedActions";

function App(props: any) {
  const {actions, users, currentUser, isAuthenticated} = props
  const navigate = useNavigate()

  useEffect(() => {
    if (users.length === 0) {
      actions
        .loadUsers()
        .catch((error: any) => console.error(error))
    }

    if (!currentUser) {
      actions
        .setCurrentUser()
    }
  }, [])

  useEffect(() => {
    if (currentUser) {
      actions
        .setIsAuthenticated(true)
    }
  }, [currentUser]);

  return (
    <div className="App">
      <Routes>
        <Route
          path='/'
          element={<Main/>}
        />
        <Route
          path='/login'
          element={<LoginPage
            isAuthenticated={isAuthenticated}
          />}
        />
        <Route
          path='/signup'
          element={<SignupPage
            isAuthenticated={isAuthenticated}
          />}
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
    users: state.users,
    currentUser: state.currentUser,
    isAuthenticated: state.isAuthenticated
  }
}

function mapDispatchToProps(dispatch: any) {
  return {
    actions: {
      loadUsers: bindActionCreators(usersActions.loadUsers, dispatch),
      setCurrentUser: bindActionCreators(currentUserActions.setCurrentUser, dispatch),
      setIsAuthenticated: bindActionCreators(isAuthenticatedActions.setIsAuthenticated, dispatch)
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
