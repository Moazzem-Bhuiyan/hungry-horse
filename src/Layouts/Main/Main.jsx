import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navber from '../../Pages/Shared/Navber/Navber'
import Footer from '../../Pages/Shared/Footer/Footer'

export default function Main() {
  const location = useLocation();
  console.log(location)
const hideNavberFooter = location.pathname.includes('login') || location.pathname.includes('signup') 

  return (

    <>
      { hideNavberFooter ||  <Navber></Navber>}
        <Outlet></Outlet>
      { hideNavberFooter || <Footer></Footer>}

    </>


  )
}
