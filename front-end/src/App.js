import Register from'./Login & Register/Register'
import Login from'./Login & Register/Login'
import Cash_invoice from './Component/Cash_invoice'
import { 
  BrowserRouter as Router,
  Route,
  Routes
} 
from "react-router-dom";




function App() {
  return (<Router>

          <Routes>
              <Route exact path="/" element={<Cash_invoice />} />
              <Route exact path="/Register" element={<Register/>} />
              <Route exact path="/Login" element={<Login/>} />
          </Routes>

    </Router>
  )
}

export default App;
