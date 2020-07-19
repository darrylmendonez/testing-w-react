import React from 'react'

import './styles.scss'
import Logo from './../../assets/imgs/logo.jpg'

const Header = props => {
  return (
    <header data-test="header-component">
      <div className="wrap">
        <div className="logo">
          <img data-test="logo-img" src={Logo} alt=""/>
        </div>
      </div>
    </header>
  )
}

export default Header