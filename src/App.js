import React from 'react'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'
import {Routes, Route} from 'react-router-dom'
import './styles/main.scss'
import PrivateRouter from './utils/PrivateRouter'

function App() {
  return (
    <div>
      <Routes>
        <Route element={<PrivateRouter/>}>
          <Route path='/' exact/>
          <Route path='/dashboard' element={<Dashboard/>} />
        </Route>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
