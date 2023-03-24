import React, {FC} from "react";
import './Header.css'
import logo from './assets/logo.svg'
import {connect} from "react-redux";
import {UserType} from "../../types/types";
import getInitials from "../../helpers/getInitials";

interface Props {
  currentUser: UserType
}

const Header: FC<Props> = ({currentUser}: Props) => {
  return (
    <header>
      <div className='header__logo-section'>
        <img src={logo} alt='Twitter Clone'/>
        Another Twitter Clone
      </div>
      <div className='header__avatar-section'>
        <span>
          {currentUser ? currentUser.name : 'Loading username...'}
        </span>
        <div className='header__avatar'>
          {currentUser ? getInitials(currentUser.name as string) : ''}
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
