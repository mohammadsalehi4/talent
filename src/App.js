import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header/header'
import Footer from './components/footer/footer';
import Main from './components/main/main'
import './App.css'

const App = () => {
  return (
    <div>
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}>
            </Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
