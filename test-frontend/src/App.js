import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(async () => {
    try {
      const result = await axios.get("http://localhost:3000/");
      console.log(result.data.access_token);
      localStorage.setItem("token", result.data.access_token);
    } catch (e) {}
  }, []);
  return <div>test</div>;
}

export default App;
