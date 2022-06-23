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

  const tokens = localStorage.getItem("token");
  console.log(tokens);

  const postApi = async () => {
    axios
      .post("http://localhost:3000/post-receipt", {
        token: `Bearer ${tokens}`,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          // token expired - remove and redirect to login
          localStorage.removeItem("token");
          // navigate("/login");
        }
      });
  };

  return (
    <div>
      <button onClick={postApi}>post api</button>
    </div>
  );
}

export default App;
