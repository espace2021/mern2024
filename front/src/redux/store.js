import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from "../features/articleSlice"
import authReducer from "../features/AuthSlice"
import scategoriesReducer from "../features/scategorieSlice"
import categoriesReducer from "../features/categorieSlice"

import {persistReducer} from 'redux-persist'

import storage from 'redux-persist/lib/storage'

import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, authReducer)

const store = configureStore({
  reducer: {
    storearticles:articlesReducer,
    storescategories:scategoriesReducer,
    storecategories:categoriesReducer,
    auth:persistedReducer
  },
  middleware: [thunk]
})
export default store

