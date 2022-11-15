import React from 'react'
import {useNavigate} from "react-router-dom"

function Dashboard() {
  const dashNavigate = useNavigate()
  React.useEffect(() => {
    if(localStorage.getItem("AUTH_TOKEN") === null || localStorage.getItem("AUTH_TOKEN") === "undefined" ) dashNavigate("/login")
  },[dashNavigate])
  return (
    <div>Welcome!</div>
  )
}

export default Dashboard
