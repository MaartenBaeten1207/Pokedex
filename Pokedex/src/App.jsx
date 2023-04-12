import { useState } from 'react'
import { Routes, Route, Link ,useNavigate, Navigate } from "react-router-dom";
import { nanoid } from 'nanoid'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// import './App.css'

//Import Pages
import Home from './pages/Home'
import MyTeam from './pages/MyTeam'
import MyFavorites from './pages/MyFavorites'

//Import Components


function App() {
  return (
    <div className="App">
      <Routes>
        <Route 
          path='/' 
          element={<Home/>}
        />
        <Route 
          path='/myteam' 
          element={
            <MyTeam />
          }
        />
        <Route 
          path="/myfavorites" 
          element={
            <MyFavorites/>
          }
        />
      </Routes>
    </div>
  )
}

export default App
