import React from 'react'
import styles from './Header.module.css'
import { ReactComponent as Logo } from '../../assets/img/Icon.svg'
import Nav from '../Nav/Nav'

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
    </header>
  )
}
