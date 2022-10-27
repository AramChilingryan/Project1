import React from 'react'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Navigation from './components/Navigation'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
        <Navigation/>
        <Routes>
            <Route path='/'/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
        </Routes>
    </div>
  )
}

export default App
