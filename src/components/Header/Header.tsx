import React, { useState } from 'react'
import Logo from '../../assets/img/Icon.svg'
import { NavLink } from 'react-router-dom'

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const hendlrClick = () => {
    setMenuIsOpen(!menuIsOpen)
  }
  return (
    <div className='header'>
      <div className='container header__container'>
        <div
          className={menuIsOpen ? 'header__menu header__menu--active' : 'header__menu'}
          onClick={hendlrClick}
        >
          <div className='header__menu-line'></div>
          <div className='header__menu-line'></div>
          <div className='header__menu-line'></div>
        </div>
        <div className={menuIsOpen ? 'header__mobile header__mobile--active' : 'header__mobile'}>
          <div className='header__logo'>
            <NavLink to={'./home'} className='header__logo-link' onClick={hendlrClick}>
              <img src={`${Logo}`} alt='English learning app' className='header__logo-link' />
            </NavLink>
          </div>
          <nav className='header__nav nav'>
            <ul className='nav__list'>
              <li className='nav__item'>
                <NavLink to='/home' className='nav__link' onClick={hendlrClick}>
                  HOME
                </NavLink>
              </li>
              <li className='nav__item'>
                <NavLink to='games' className='nav__link' onClick={hendlrClick}>
                  GAMES
                </NavLink>
              </li>
              <li className='nav__item'>
                <NavLink to='library' className='nav__link' onClick={hendlrClick}>
                  LIBRARY
                </NavLink>
              </li>
              <li className='nav__item'>
                <NavLink to='learn' className='nav__link' onClick={hendlrClick}>
                  LEARN
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
