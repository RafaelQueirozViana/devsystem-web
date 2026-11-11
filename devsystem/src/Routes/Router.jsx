import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../Pages/About'
import Login from '../Pages/Login'
import Navbar from '../Components/Navbar'

export default function Router() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/sobre' element={<About/>}/>
    </Routes>
    </BrowserRouter>
  
  )
}
