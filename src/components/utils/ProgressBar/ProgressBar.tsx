import React from 'react'
import styles from './ProgressBar.module.css'
import { useSelector } from 'react-redux'
import { IRootState } from '../../../redux/rootReducer'
import { ILibraryState } from '../../../redux/libraryReduser'

interface IProgressBarWidth {
  width: string
}

export default function ProgressBar() {
  const library = useSelector<IRootState, ILibraryState>(store => store.library)

  const progressBarWidth: IProgressBarWidth = {
    width: `${(100 / library.wordList.slice(-10).length) * (library.wordIndex + 1)}vw`,
  }
  return (
    <div className={styles.progressBarContainer}>
      <div className={styles.progressBar} style={progressBarWidth}></div>
    </div>
  )
}
