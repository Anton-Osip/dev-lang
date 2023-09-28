import { createSlice } from '@reduxjs/toolkit'
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

  reducers: {},
})

export default libraryReducer.reducer
// export const {} = libraryReducer.actions
