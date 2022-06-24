import "./App.css";
import axios from "axios";
import { useRef } from "react";

function App() {
  const getToken = async () => {
    const result = await axios.get("http://localhost:3000/");
    console.log(result.data.access_token);
    localStorage.setItem("token", result.data.access_token);
  };

  getToken();

  const tokens = localStorage.getItem("token");
  console.log(tokens);

  const contactNameRef = useRef("");
  const publishedOnRef = useRef("");
  const dueDateRef = useRef("");
  const totalAfterDiscountRef = useRef("");
  const grandTotalRef = useRef("");

  const postApi = async () => {
    axios
      .post("http://localhost:3000/post-receipt", {
        headers: {
          Authorization: `Bearer ${tokens}`,
        },
        dataObj: {
          contactName: contactNameRef.current.value,
          publishedOn: publishedOnRef.current.value,
          dueDate: dueDateRef.current.value,
          totalAfterDiscount: parseInt(totalAfterDiscountRef.current.value),
          grandTotal: parseInt(grandTotalRef.current.value),
        },
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
    console.log(typeof parseInt(grandTotalRef.current.value));
  };

  return (
    <div>
      <input type="text" ref={contactNameRef} />
      <input type="text" ref={publishedOnRef} />
      <input type="text" ref={dueDateRef} />
      <input type="text" ref={totalAfterDiscountRef} />
      <input type="text" ref={grandTotalRef} />
      <button onClick={postApi}>post api</button>
    </div>
  );
}

export default App;
