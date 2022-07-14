import Button from '@mui/material/Button';
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from './Login.js'
import Album from './Album.js'
import Register from './Register.js'

function App() {

  
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Album" element={<Album/>}/>
          <Route path="/Register" element={<Register/>}/>
        </Routes>
    </div>
  )
}

export default App;
