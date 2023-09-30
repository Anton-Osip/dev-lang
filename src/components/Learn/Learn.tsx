import React, { useEffect } from 'react'
import styles from './Learn.module.css'
import { useSelector } from 'react-redux'
import { IRootState } from '../../redux/rootReducer'
import { ILibraryState, setWordIndex } from '../../redux/libraryReduser'
import ProgressBar from '../utils/ProgressBar/ProgressBar'
import { useDispatch } from 'react-redux'
import { string } from 'yup'

export default function Learn() {
  const library = useSelector<IRootState, ILibraryState>(store => store.library)
  const dispatch = useDispatch()
  const speak = (word: string) => {
    const speakInstance = new SpeechSynthesisUtterance(word)
    speakInstance.voice = speechSynthesis.getVoices()[51]
    speechSynthesis.speak(speakInstance)
  }
  useEffect(() => {
    speak(library.wordList[library.wordIndex ].translation)
  }, [library.wordIndex, library.wordList])
  return (
    <>
      <ProgressBar />
      <section className={styles.learnSection}>
        <span>{library.wordList[library.wordIndex].word}</span>
        <h3>{library.wordList[library.wordIndex].translation}</h3>
        <div
          onClick={() => {
            dispatch(setWordIndex())
          }}
          className={styles.btnNext}
        ></div>
      </section>
    </>
  )
}
