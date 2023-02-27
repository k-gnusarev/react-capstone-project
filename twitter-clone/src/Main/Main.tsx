import React, {FC, useEffect} from "react";
import Header from "./Header/Header";
import TweetForm from "./TweetForm/TweetForm";
import TweetFeed from "./TweetFeed/TweetFeed";
import './Main.css'
import {connect} from "react-redux";
import {useNavigate} from "react-router-dom";

const Main: FC<{
  isAuthenticated: boolean
}> = (props) => {
  const {isAuthenticated} = props
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login')
    }
  })

  return (
    <>
      <Header/>
      <main>
        <TweetForm/>
        <TweetFeed/>
      </main>
    </>
  )
}

function mapStateToProps(state: any) {
  return {
    isAuthenticated: state.isAuthenticated
  }
}

export default connect(
  mapStateToProps
)(Main);
