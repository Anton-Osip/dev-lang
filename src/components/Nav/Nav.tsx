import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <NavLink to='/dashboard'>Home</NavLink>
      <NavLink to='/games'>Games</NavLink>
      <NavLink to='/library'>Library</NavLink>
      <NavLink to='/learn'>Learn</NavLink>
    </nav>
  )
}
