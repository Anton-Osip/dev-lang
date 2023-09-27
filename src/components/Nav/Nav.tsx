/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href='#'>Home</a>
      <a href='#'>Games</a>
      <a href='#'>Library</a>
      <a href='#'>Learn</a>
    </nav>
  )
}
