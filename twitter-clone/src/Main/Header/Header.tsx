import React, {FC, useEffect} from "react";
import './Header.css'
import logo from './assets/logo.svg'
import getInitials from "../../helpers/getInitials";

const Header: FC<any> = (props) => {
  const currentUsername = 'John Smith' // load from context

  return (
    <header>
      <div className='header__logo-section'>
        <img src={logo} alt='Twitter Clone' />
        Another Twitter Clone
      </div>
      <div className='header__avatar-section'>
        <span>
          {currentUsername}
        </span>
        <div className='header__avatar' >
          {getInitials(currentUsername)}
        </div>
      </div>
    </header>
  )
}

export default Header
