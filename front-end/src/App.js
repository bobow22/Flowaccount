import React, { useState, useEffect } from "react";
import Register from "./Login & Register/Register";
import Login from "./Login & Register/Login";
import Dashboard from "./Component/Dashboard";
import Cash_invoice from "./Component/Cash_invoice";
import From from "./Component/validation_Test";
import axios from "axios";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//zeera
function App() {

  useEffect(() => {
    const getToken = async () => {
      const result = await axios.get("http://localhost:3000/");
      console.log(result.data.access_token);
      localStorage.setItem("token", result.data.access_token);
    }
    getToken();
  }, [])

  return (
    <Router>
      <Routes>
        <Route exact path="/CashInvoice" element={<Cash_invoice />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
