import React, {FC, useEffect} from "react";
import './Header.css'
import logo from './assets/logo.svg'
import getInitials from "../../helpers/getInitials";
import getUserName from "../../helpers/getUserName";
import {store} from "../../index";
import {connect} from "react-redux";
import {UserType} from "../../types/types";

const Header: FC<{
  currentUser: UserType
}> = (props) => {
  //const currentUsername = 'John Smith' // load from context

  const {currentUser} = props
  // console.log(store.getState())
  return (
    <header>
      <div className='header__logo-section'>
        <img src={logo} alt='Twitter Clone' />
        Another Twitter Clone
      </div>
      <div className='header__avatar-section'>
        <span>
          {currentUser ? currentUser.name : 'Loading username...'}
          {/*{'John Smith'}*/}
          {/*{getUserName(currentUsername, store.getState().users)}*/}
        </span>
        <div className='header__avatar' >
          {'JS'}
          {/*{getInitials(currentUser.name as string)}*/}
        </div>
      </div>
    </header>
  )
}

function mapStateToProps(state: any) {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Header)
