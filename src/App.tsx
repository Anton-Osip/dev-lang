import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Library from './components/Library/Library'
import Learn from './components/Learn/Learn'
import Games from './components/Games/Games'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/library' element={<Library />} />
        <Route path='/learn' element={<Learn />} />
        <Route path='/games' element={<Games />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
