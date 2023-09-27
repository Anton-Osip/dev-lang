import React from 'react'
import styles from './Dashboard.module.css'
import PlayButton from '../../assets/img/play.svg'

export default function Dashboard() {
  return (
    <section className={styles.dashboardContainer}>
      <div className={styles.gameBlock}>
        <p>
          The most popular games is <br /> <b>Speak IT</b>
        </p>
        <img className={styles.btnPlay} src={PlayButton} alt='PlayButton' />
        <button className={styles.btnRandom}>Play random game</button>
      </div>

      <div className={styles.pointsBlock}>
        <span>Common experience</span>
        <h3>238 points</h3>
      </div>

      <div className={styles.levelBlock}>
        <span>level</span>
        <h3>7 level</h3>
        <p>Learn 750 new words in one cours</p>
        <div className={styles.levelBackground}></div>
      </div>
    </section>
  )
}