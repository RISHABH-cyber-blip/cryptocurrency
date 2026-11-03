import React from 'react'
import { Routes, Link, Route } from "react-router-dom";
import {Layout,Typography,Space} from 'antd'

import { Navbar } from './components/INDEX.js'

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">

      </div>
      <div className="footer">
      </div>
    </div>
  )
}

export default App