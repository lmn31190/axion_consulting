import React, { useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import Navbar from "./components/Navbar"

const App = () => {
  const location = useLocation();
  const isErrorPage = location.pathname === "/404";


  return (
    <>
      {!isErrorPage &&  <Navbar />}
      <Routes>
        {<Route element={<Home />} index path='/' />}
        <Route element={<Navigate to="/404" replace />} path='*' />
        <Route path='/404' element={<Error />} />
      </Routes>
    </>
  )
}

export default App