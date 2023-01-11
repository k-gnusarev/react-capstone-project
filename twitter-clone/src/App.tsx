import React from 'react';
import './App.css';
import LoginPage from "./LoginPage/LoginPage";
import {Route, Routes} from 'react-router-dom';
import SignupPage from "./SignupPage/SignupPage";
import Main from './Main/Main';
import NotFoundPage from "./common/NotFound/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />
        <Route
          path='/login'
          element={<LoginPage />}
        />
        <Route
          path='/signup'
          element={<SignupPage />}
        />
        <Route
          path='*'
          element={<NotFoundPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
