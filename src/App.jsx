import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'

const App = () => {
  return (
    <>
     <Routes>
      <Route element={<Home/>} index path='/'/>
      <Route element={<Error/>} path='*'/>
      </Routes> 
    </>
  )
}

export default App