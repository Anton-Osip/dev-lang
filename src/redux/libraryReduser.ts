import { createSlice } from '@reduxjs/toolkit'
import uuid from 'react-uuid'
// import uuid from 'react-uuid'

export interface ILibraryState {
  wordList: IWordState[]
}

export interface IWordState {
  id: string
  word: string
  translation: string
  learn: number
}

const initialState: ILibraryState = {
  wordList: [
    { id: '1', word: 'кот', translation: 'cat', learn: 80 },
    { id: '2', word: 'собака', translation: 'dog', learn: 80 },
    { id: '3', word: 'привет', translation: 'hellow', learn: 80 },
  ],
}

const libraryReducer = createSlice({
  name: 'library',
  initialState: initialState,

  reducers: {
    addNewWord(state, action) {
      state.wordList.push({
        id: uuid(),
        word: action.payload.word,
        translation: action.payload.translation,
        learn: 0,
      })
    },
    deleteWord(state, action) {
      state.wordList = state.wordList.filter(wordItem => wordItem.id !== action.payload)
    },
  },
})

export default libraryReducer.reducer
export const { addNewWord, deleteWord } = libraryReducer.actions
