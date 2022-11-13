import React from 'react'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'
import Navigation from './components/Navigation'
import {Routes, Route} from 'react-router-dom'
import './styles/main.scss'

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path='/'/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
