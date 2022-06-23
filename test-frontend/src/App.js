import "./App.css";
import axios from "axios";
import { useEffect } from "react";

function App() {
  const getToken = async () => {
    const result = await axios.get("http://localhost:3000/");
    console.log(result.data.access_token);
    localStorage.setItem("token", result.data.access_token);
  };

  getToken();
  // const token = localStorage.getItem("token");
  // const postApi = async () => {
  //   axios.post("http://localhost:3000/post-receipt");
  // };

  return (
    <div>
      <button>post api</button>
    </div>
  );
}

export default App;
