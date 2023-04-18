import { useState } from 'react'
import { Routes, Route, Link ,useNavigate, Navigate } from "react-router-dom";
import { nanoid } from 'nanoid'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Home from './pages/Home'
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route 
          path='/' 
          element={<Home/>}
        />
      <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App
