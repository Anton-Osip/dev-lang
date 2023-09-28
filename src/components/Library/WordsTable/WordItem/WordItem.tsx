import React from 'react'
import styles from './WordItem.module.css'
import { IWordState, deleteWord } from '../../../../redux/libraryReduser'
import DeleteBtn from '../../../../assets/img/delete.svg'
import { useDispatch } from 'react-redux'

export default function WordItem({ id, word, translation, learn }: IWordState) {
  const dispatch = useDispatch()
  return (
    <ul className={styles.wordsTableList}>
      <li className={styles.wordsTableItem}>{word}</li>
      <li className={styles.wordsTableItem}>{translation}</li>
      <li className={styles.wordsTableItem}>{`${learn}%`}</li>
      <div className={styles.settings}>
        <button onClick={() => dispatch(deleteWord(id))} className={styles.settingsBtn}>
          <img src={DeleteBtn} alt='Карзина' className={styles.settingsBtnImg} />
        </button>
      </div>
    </ul>
  )
}
