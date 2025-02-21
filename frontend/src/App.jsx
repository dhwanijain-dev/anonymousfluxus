import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import CanvasBackground from './components/CanvasBackground'
import SignUp from './components/SignUp'
import Hospital from './components/Hospital'

const App = () => {
 
  const showCanvas = location.pathname === "/" || location.pathname === "/signup";

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App