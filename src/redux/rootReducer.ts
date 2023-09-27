import { Reducer, combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import libraryReducer,{ ILibraryState } from './libraryReduser'


export interface IRootState {
    library: ILibraryState
}

const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer: Reducer<IRootState> = combineReducers({
  library: libraryReducer,
})

const persistedReducer: any = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
export default store
