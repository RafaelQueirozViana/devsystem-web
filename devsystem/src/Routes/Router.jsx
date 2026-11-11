import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../Pages/About'
import Login from '../Pages/Login'

export default function Router() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/sobre' element={<About/>}/>
    </Routes>
    </BrowserRouter>
  
  )
}
