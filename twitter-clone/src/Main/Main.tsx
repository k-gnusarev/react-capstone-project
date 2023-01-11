import React from "react";
import Header from "./Header/Header";
import TweetForm from "./TweetForm/TweetForm";
import TweetFeed from "./TweetFeed/TweetFeed";
import './Main.css'

const Main = () => {
  return (
    <>
      <Header

      />
      <main>
        <TweetForm/>
        <TweetFeed/>
      </main>
    </>
  )
}

export default Main
