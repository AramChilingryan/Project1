import { Outlet, Navigate } from "react-router-dom"
import { AUTH_TOKEN } from "../constants/token"

function PrivateRouter() {
  return (
    <>
      {
        (localStorage.getItem(AUTH_TOKEN) !== null &&
        localStorage.getItem(AUTH_TOKEN) !== "undefined") ?
        <Outlet/> : <Navigate to="/login"/>
      }
    </>
  )
}

export default PrivateRouter
