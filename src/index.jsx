import React from 'react'
import './scss/main.scss'
import { createRoot } from 'react-dom/client'
import { App } from './App.tsx'
import { HashRouter } from 'react-router-dom'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <HashRouter>
    <App />
  </HashRouter>,
)
