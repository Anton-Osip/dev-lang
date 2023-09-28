import React from 'react'
import styles from './WordsTable.module.css'
import { useSelector } from 'react-redux'
import { IRootState } from '../../../redux/rootReducer'
import { ILibraryState } from '../../../redux/libraryReduser'
import WordItem from './WordItem/WordItem'

export default function WordsTable() {
  const library = useSelector<IRootState, ILibraryState>(store => store.library)
  return (
    <div className={styles.wordsTable}>
      <ul className={styles.wordsTableList}>
        <li>
          <h3 className={styles.wordsTableTitle}>Word</h3>
        </li>
        <li>
          <h3 className={styles.wordsTableTitle}>Translation</h3>
        </li>
        <li>
          <h3 className={styles.wordsTableTitle}>Learn</h3>
        </li>
      </ul>
      {library.wordList.map(wordItem => (
        <WordItem
          key={wordItem.id}
          id={wordItem.id}
          word={wordItem.word}
          translation={wordItem.translation}
          learn={wordItem.learn}
        />
      ))}
    </div>
  )
}
