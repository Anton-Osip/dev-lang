import React from 'react'
import styles from './Library.module.css'
import LibraryForm from './LibraryForm/LibraryForm'

export default function Library() {
  return (
    <section className={styles.libraryBlock}>
      <span>
        Add new <b>Word</b>
      </span>
      <LibraryForm />
    </section>
  )
}
