import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectRoute() {
    const auth = JSON.parse(localStorage.getItem('data'))
  return (
    <>
      {auth ?<Outlet/>:<Navigate to={'/login'}/>}
    </>
  )
}

export default ProtectRoute