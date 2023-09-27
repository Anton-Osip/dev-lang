import React from 'react'
import styles from './Library.module.css'
import addBtn from '../../assets/img/add.svg'

export default function Library() {
  return (
    <section className={styles.libraryBlock}>
      <span>
        Add new <b>Word</b>
      </span>
      <form className={styles.addWordBlock}>
        <input type='text' />
        <button>
          <img src={addBtn} alt='addBtn' />
        </button>
      </form>
    </section>
  )
}
