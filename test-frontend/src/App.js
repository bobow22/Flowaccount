import "./App.css";
import axios from "axios";
import { useRef, useState, useEffect } from "react";

// function App() {
//   const getToken = async () => {
//     const result = await axios.get("http://localhost:3000/");
//     console.log(result.data.access_token);
//     localStorage.setItem("token", result.data.access_token);
//   };

//   getToken();

//   const tokens = localStorage.getItem("token");
//   console.log(tokens);

//   const contactNameRef = useRef("");
//   const publishedOnRef = useRef("");
//   const dueDateRef = useRef("");
//   const totalAfterDiscountRef = useRef("");
//   const grandTotalRef = useRef("");

//   const postApi = async () => {
//     axios
//       .post("http://localhost:3000/post-receipt", {
//         headers: {
//           Authorization: `Bearer ${tokens}`,
//         },
//         dataObj: {
//           contactName: contactNameRef.current.value,
//           publishedOn: publishedOnRef.current.value,
//           dueDate: dueDateRef.current.value,
//           totalAfterDiscount: parseInt(totalAfterDiscountRef.current.value),
//           grandTotal: parseInt(grandTotalRef.current.value),
//         },
//       })
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         if (err.response.status === 401) {
//           // token expired - remove and redirect to login
//           localStorage.removeItem("token");
//           // navigate("/login");
//         }
//       });
//     console.log(typeof parseInt(grandTotalRef.current.value));
//   };

//   return (
//     <div>
//       <input type="text" ref={contactNameRef} />
//       <input type="text" ref={publishedOnRef} />
//       <input type="text" ref={dueDateRef} />
//       <input type="text" ref={totalAfterDiscountRef} />
//       <input type="text" ref={grandTotalRef} />
//       <button onClick={postApi}>post api</button>
//     </div>
//   );
// }



function App() {
  const header = "This is HEADER";

  //-----------------------1-------------------------

  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [result, setResult] = useState(0);

  //-----------------------2-------------------------

  const [number1, setnumber1] = useState(0);
  const [number2, setnumber2] = useState(0);
  const [result_1, setResult_1] = useState(0);

  //-----------------------Sum-------------------------

  const [sum, setsum] = useState(0);
  
  //-----------------------Discount--------------------

  const [numberdiscount, setNumberdiscount] = useState(0);
  const [discount, setDiscount] = useState(0);

  //-----------------------Tax--------------------

  const [tax, setTax] = useState(0);

  //-----------------------Net Total--------------------

  const [nettotal, setNettotal] = useState(0);

  //----------------------useEffect---------------------

  useEffect(() => {
    
    //1
    setResult(parseInt(counter, 10) * parseInt(counter2, 10)) //result

    //2
    setResult_1(parseInt(number1, 10) * parseInt(number2, 10)) //result_1

    //sum
    setsum(parseInt(result, 10) + parseInt(result_1, 10)); //sum
    
    //Discount
    setDiscount(parseInt(sum, 10)-(parseInt(sum, 10)*(numberdiscount/100)))

    //Tax
    setTax((parseInt(sum, 10)-(parseInt(sum, 10)*(numberdiscount/100)))* 7/100 )

    //Net Total
    setNettotal(parseInt(sum, 10)-(parseInt(sum, 10)*(numberdiscount/100)) + (parseInt(sum, 10)-(parseInt(sum, 10)*(numberdiscount/100)))* 7/100)

  }, [counter,counter2,number1,number2,sum,result,result_1,numberdiscount,discount,tax]);


  return (
    <>

      {/*------ Number 1 ------*/}
      <h1>{header}</h1>
      <h3>
        count1 : {counter} | count2 : {counter2}
      </h3>

      <input
        type="text"
        onChange={(e) => setCounter(e.target.value)}
      />
      <input
        type="text"
        onChange={(e) => setCounter2(e.target.value)}
        />
      <h2 style={{color: 'red'}}>{result}</h2>
      <hr/>


      {/*------ Number 2 ------*/}
      <h3>
        count1 : {number1} | count2 : {number2}
      </h3>

      <input
        type="text"
        onChange={(e) => setnumber1(e.target.value)}
      />

      <input
        type="text"
        onChange={(e) => setnumber2(e.target.value)}
      />
      <h2 style={{color: 'red'}}>{result_1}</h2>
      <hr/>



      {/*------ Total sum ------*/}
      <h2 style={{color: 'red'}}>Total: {sum.toFixed(2)}</h2>

      <hr/>

      {/*------ Discount ------*/}
      <h3>Discount: {numberdiscount}%</h3>

      <input
        type="text"
        onChange={(e) => setNumberdiscount(e.target.value)}
      />


      <h2 style={{color: 'red'}}>{discount.toFixed(2)}</h2>
    
      <hr/>

      {/*------ Tax ------*/}
      <h3>Tax: 7%</h3>
      <h2 style={{color: 'red'}}>{tax.toFixed(2)}</h2>


      <hr/>


      {/*------ Net ------*/}
      <h2 style={{color: 'red'}}>Net Total: {nettotal.toFixed(2)}</h2>
  
    </>
  );

 }



export default App;
