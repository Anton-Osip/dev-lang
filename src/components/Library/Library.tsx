import React from 'react'
import styles from './Library.module.css'
import LibraryForm from './LibraryForm/LibraryForm'

import WordsTable from './WordsTable/WordsTable'

export default function Library() {
  

  return (
    <section className={styles.libraryBlock}>
      <span>
        Add new <b>Word</b>
      </span>
      <LibraryForm />
      <WordsTable />
    </section>
  )
}
