import React, {useEffect, useState} from 'react';
import './App.css';
import LoginPage from "./LoginPage/LoginPage";
import {Route, Routes} from 'react-router-dom';
import SignupPage from "./SignupPage/SignupPage";
import Main from './Main/Main';
import NotFoundPage from "./common/NotFound/NotFoundPage";
import getData from "./helpers/getData";

function App() {
  const [tweets, setTweets] = useState([])
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      getData('tweets'),
      getData('users')
    ])
      .then(res => console.log(res))
    const response = getData('tweets')
      .then(res => {
        setTweets(res)
        setIsLoading(false)
      })
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route
          path='/'
          element={<Main
            isLoading={isLoading}
            tweets={tweets}
          />}
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
