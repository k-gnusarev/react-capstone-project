import React, {FC, useEffect, useState} from "react";
import Header from "./Header/Header";
import TweetForm from "./TweetForm/TweetForm";
import TweetFeed from "./TweetFeed/TweetFeed";
import './Main.css'
import Loader from "../common/Loader/Loader";
import {TweetType} from "../types/types";

const Main = () => {

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

export default Main
