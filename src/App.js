import React from 'react'
import LoginComponent from "./components/LoginComponent"
import Dashboard from './components/Dashboard'
import {Routes, Route,Link} from "react-router-dom"

function App() {
  return (
    <div>
        <nav>
             <Link to= "/">Home </Link>
             <Link to = "/login">Login </Link>
        </nav>
        <Routes>
            <Route  path='/'/>
            <Route path='/login' element = { <LoginComponent />}/>
            <Route path='/dashboard' element ={<Dashboard />}/>
        </Routes>

    </div>
  )
}

export default App