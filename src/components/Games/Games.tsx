import React from 'react'
import styles from './Games.module.css'

import imgCheckCorrect from '../../assets/img/check-the-correct-one.svg'
import imgSelectTranslation from '../../assets/img/select-translation.svg'
import imgSprintGuess from '../../assets/img/sprint-guess.svg'
import imgWriteTranslation from '../../assets/img/write-translation.svg'
import imgPutTranslation from '../../assets/img/put-translation.svg'
import imgSpeakAndCheck from '../../assets/img/speak-and-check.svg'
import imgListenSprint from '../../assets/img/listen-sprint.svg'
import imgRememberTranslation from '../../assets/img/remember-translation.svg'
import imgListenAndGuess from '../../assets/img/listen-and-guess.svg'
import { NavLink } from 'react-router-dom'

interface IGames {
  id: string
  img: string
  path: string
  name: string
  description: string
}

export default function Games() {
  const GAMES: IGames[] = [
    {
      id: 'game 0',
      img: imgSpeakAndCheck,
      path: 'speak-and-check',
      name: 'Speak and check',
      description: 'Say the word on the screen and check your spelling',
    },
    {
      id: 'game 1',
      img: imgCheckCorrect,
      path: 'check-it',
      name: 'Check the correct one',
      description: 'Check correct word',
    },
    {
      id: 'game 2',
      img: imgPutTranslation,
      path: 'put-together-a-translation',
      name: 'Put together a translation',
      description: 'Say the word on the screen and check your spelling',
    },
    {
      id: 'game 3',
      img: imgListenAndGuess,
      path: 'listen-and-guess',
      name: 'Guess and listen',
      description: 'Say the word on the screen and check your spelling',
    },
    {
      id: 'game 4',
      img: imgSprintGuess,
      path: 'sprint-guess',
      name: 'Sprint by guessing',
      description: 'Say the word on the screen and check your spelling',
    },
    {
      id: 'game 5',
      img: imgSelectTranslation,
      path: 'selec-translation',
      name: 'Select the right translation',
      description: 'Say the word on the screen and check your spelling',
    },
    {
      id: 'game 6',
      img: imgRememberTranslation,
      path: 'remember-translation',
      name: 'Remember translation',
      description: 'Say the word on the screen and check your spelling',
    },
    {
      id: 'game 7',
      img: imgWriteTranslation,
      path: 'write-it',
      name: 'Write the translation',
      description: 'Write correct word',
    },
    {
      id: 'game 8',
      img: imgListenSprint,
      path: 'listen-sprint',
      name: 'Sprint by listen',
      description: 'Say the word on the screen and check your spelling',
    },
  ]
  return (
    <section className={styles.gameContainer}>
      {GAMES.map(game => (
        <NavLink key={game.id} to={'game-' + game.path}>
          <div className={styles.gameBlock}>
            <div>
              <h2>{game.name}</h2>
              <p>{game.description}</p>
            </div>
            <img src={game.img} alt={game.name} />
          </div>
        </NavLink>
      ))}
    </section>
  )
}
