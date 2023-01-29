import { useState } from 'react'
import './App.css'
import Header from './assets/layout/header'
import HomePage from './assets/pages/home-page'
import { Route, Routes } from 'react-router-dom'
import ModalPage from './assets/pages/modal'
import SearchInput from './components/search-input'

function App() {

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/modal/:name' element={<ModalPage />} />
      </Routes>
    </div>
  )
}

export default App
