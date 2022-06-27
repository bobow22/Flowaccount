import React, { useState, useEffect } from "react";
import Register from "./Login & Register/Register";
import Login from "./Login & Register/Login";
import Dashboard from "./Component/Dashboard";
import Cash_invoice from "./Component/Cash_invoice";
import From from "./Component/validation_Test";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Cash_invoice />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
