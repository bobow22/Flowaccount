import React, { useState } from "react";
import "../Component/Cash_invoice.css";
import { SiVerizon } from "react-icons/si";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import axios from "axios";
import { useRef } from "react";



export default function Cash_invoice() {
	const getToken = async () => {
		const result = await axios.get("http://localhost:3000/");
		console.log(result.data.access_token);
		localStorage.setItem("token", result.data.access_token);
	}

  
	getToken();

	//------------------------Thousand separator input with React Hooks--------------------------//

  	const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  	const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, "")

  	const ThousandChange = event =>
	  setQuantity1(addCommas(removeNonNumeric(event.target.value)))


	//-----------------------------------Form validation----------------------------------------//
	const [CompanyCustomer_name, setCompanyCustomer_name] = useState('')
    const [customer_name, setCustomer_name] = useState('')
    const [Customer_address, setCustomer_address] = useState('')
    const [Tax_Number, setTax_Number] = useState('')


    const [ItemName_1, setItemName_1] = useState('')
    const [ItemName_2, setItemName_2] = useState('')
    const [ItemName_3, setItemName_3] = useState('')
    const [ItemName_4, setItemName_4] = useState('')

	const [ProductUnit_1, setProductUnit_1] = useState('')
	const [ProductUnit_2, setProductUnit_2] = useState('')
	const [ProductUnit_3, setProductUnit_3] = useState('')
	const [ProductUnit_4, setProductUnit_4] = useState('')


    const [error, setError] = useState('')


    const handleSubmit = (e) => {
      e.preventDefault()
      //--------------Error 
      if(customer_name.length === 0 || CompanyCustomer_name.length === 0 || Customer_address.length === 0 || Tax_Number.length != 13){

        setError(true)

      }

      if(ItemName_1.length === 0 || ItemName_2.length === 0 || ItemName_3.length === 0 || ItemName_4.length === 0){
        setError(true)
      }

	  if(ProductUnit_1.length === 0 || ProductUnit_2.length === 0 || ProductUnit_3.length === 0 || ProductUnit_4.length === 0){
		setError(true)
	  }

      //------------Success
      if(customer_name){
        console.log(
          'CompanyCustomer name:', CompanyCustomer_name,
          '\nCustomer name:',customer_name,
          '\nCustomer address:', Customer_address,
          '\mTax Number:', Tax_Number,
          '\nItem Name 1:', ItemName_1,
          '\nItem Name 2:', ItemName_2,
          '\nItem Name 3:', ItemName_3,
          '\nItem Name 4:', ItemName_4,
		  '\nProductUnit 1:', ProductUnit_1,
		  '\nProductUnit 2:', ProductUnit_2,
		  '\nProductUnit 3:', ProductUnit_3,
		  '\nProductUnit 4:', ProductUnit_4,
        )
      }
    }

	//----------------- 1 -----------------//
	const [quantity1, setQuantity1] = useState(0);
	const [price1, setPrice1] = useState(0);
	const [amount1, setAmount1] = useState(0);

	//----------------- 2 -----------------//
	const [quantity2, setQuantity2] = useState(0);
	const [price2, setPrice2] = useState(0);
	const [amount2, setAmount2] = useState(0);

	//----------------- 3 -----------------//
	const [quantity3, setQuantity3] = useState(0);
	const [price3, setPrice3] = useState(0);
	const [amount3, setAmount3] = useState(0);

	//----------------- 4 -----------------//
	const [quantity4, setQuantity4] = useState(0);
	const [price4, setPrice4] = useState(0);
	const [amount4, setAmount4] = useState(0);

	//----------------- Sum -----------------//
	const [sum, setSum] = useState(0);

	//----------------- Discount -----------------//
	const [numberDiscount, setNumberDiscount] = useState(0);
	const [displayDiscount, setDisplayDiscount] = useState(0);
	const [discount, setDiscount] = useState(0);

	//----------------- Tax -----------------//
	const [tax, setTax] = useState(0);

	//----------------- Net Total -----------------//
	const [netTotal, setNetTotal] = useState(0);


	const token = localStorage.getItem("token");

	const contactCompanyNameRef = useRef("");
	const contactNameRef = useRef("");
	const contactAddressRef = useRef("");
	const contactTaxIdRef = useRef("");
	const publishedOnRef = useRef("");
	const salesNameRef = useRef("");
	const dueDateRef = useRef("");

	const nameRef1 = useRef("");
	const unitNameRef1 = useRef("");

	const nameRef2 = useRef("");
	const unitNameRef2 = useRef("");

	const nameRef3 = useRef("");
	const unitNameRef3 = useRef("");

	const nameRef4 = useRef("");
	const unitNameRef4 = useRef("");

	const discountPercentageRef = useRef("");

	// "subTotal": 0,
	// "discountPercentage": 0,
	// "discountAmount": 0,
	// "totalAfterDiscount": 0,
	// "isVat": false,
	// "vatAmount": 0,
	// "grandTotal": 0,

	const postApi = async () => {
		axios
			.post("http://localhost:3000/post-receipt", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
				dataObj: {
					contactName: contactCompanyNameRef.current.value + ", " + contactNameRef.current.value,
					contactAddress: contactAddressRef.current.value,
					contactTaxIdRef: contactAddressRef.current.value,
					publishedOn: publishedOnRef.current.value,
					salesName: salesNameRef.current.value,
					dueDate: dueDateRef.current.value,

					subTotal: sum,
					discountPercentage: numberDiscount,
					discountAmount: displayDiscount,
					totalAfterDiscount: discount,
					vatAmount: tax,
					grandTotal: netTotal,

					items: [
						{
							name: nameRef1.current.value,
							quantity: quantity1,
							unitName: unitNameRef1.current.value,
							pricePerUnit: price1,
							total: amount1,
						},
						{
							name: nameRef2.current.value,
							quantity: quantity2,
							unitName: unitNameRef2.current.value,
							pricePerUnit: price2,
							total: amount2,
						},
						{
							name: nameRef3.current.value,
							quantity: quantity3,
							unitName: unitNameRef3.current.value,
							pricePerUnit: price3,
							total: amount3,
						},
						{
							name: nameRef4.current.value,
							quantity: quantity4,
							unitName: unitNameRef4.current.value,
							pricePerUnit: price4,
							total: amount4,
						},
					],
				},
			})
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.error(err)
			})
	}

	//----------------- useEffect -----------------//

	useEffect(() => {
		//1
		setAmount1(parseFloat(quantity1, 10) * parseFloat(price1, 10)); //amount1
		//2
		setAmount2(parseFloat(quantity2, 10) * parseFloat(price2, 10)); //amount2
		//3
		setAmount3(parseFloat(quantity3, 10) * parseFloat(price3, 10)); //amount3
		//4
		setAmount4(parseFloat(quantity4, 10) * parseFloat(price4, 10)); //amount4

		//Sum
		setSum(
			parseFloat(amount1, 10) +
			parseFloat(amount2, 10) +
			parseFloat(amount3, 10) +
			parseFloat(amount4, 10)
		);

		//Discount
		setDiscount(
			parseFloat(sum, 10) -
			parseFloat(sum, 10) * parseFloat(numberDiscount / 100)
		); //Discount

		//Display Discount
		setDisplayDiscount(parseFloat(sum, 10) * parseFloat(numberDiscount / 100)); //Display Discount

		//Tax
		setTax((parseFloat(discount, 10) * 7) / 100); //Tax

		//Net Total
		setNetTotal(
			parseFloat(discount, 10) + (parseFloat(discount, 10) * 7) / 100
		); //Discount
	}, [
		price1,
		price2,
		price3,
		price4,
		amount1,
		amount2,
		amount3,
		amount4,
		quantity1,
		quantity2,
		quantity3,
		quantity4,
		sum,
		numberDiscount,
		discount,
		tax,
		netTotal,
		displayDiscount,
	]);

	return (<>
		<div className="Header">
			<img
				className="Heade_img"
				src="https://flowaccount.com/blog/wp-content/uploads/2017/01/e27-flowaccount-logo.png"
			/>

			<h1>สร้างใบเสร็จรับเงิน</h1>

			<div className="Btn_Header">
				<button type="primary" htmlType="submit" className="button-65">
					<a
						style={{ color: "white", textDecoration: "none" }}
						href="https://flowaccount.com/"
					>
						ทดลองใช้งานฟรี
					</a>
				</button>

				<button type="primary" htmlType="submit" className="button-65">
					<a
						style={{ color: "white", textDecoration: "none" }}
						href="https://auth.flowaccount.com/"
					>
						ลงชื่อเข้าใช้งาน
					</a>
				</button>
			</div>
		</div>;
		{
			/* -----------------------------------------Content----------------------------------------------- */
		}
		<div className="Content">
			<div className="Btn_and_PDF">
				<div className="Btn_Content">
					{/* -------------Submit------------- */}
					<button
						id="form"
						type="submit"
						className="button-1"
					
						
					>
						ส่ง
					</button>
					<button type="submit" className="button-2">
						บันทึก
					</button>
					<button type="submit" className="button-2">
						รับ PDF
					</button>
					<button type="submit" className="button-2">
						พิมพ์
					</button>
				</div>

				{/*---------------------------------- PDF --------------------------------- */}

				<div className="PDF" style={{ marginTop: "25px" }}>
					<div className="receipt">
						<h3>ใบเสร็จรับเงิน</h3>

						<div
							className="my_company"
							style={{ fontSize: "13px", textAlign: "left" }}
						>
							<div>
								<p>
									ชื่อบริษัท:{" "}
									<input type="text" placeholder="ตัวอย่าง บริษัท ขายดี จำกัด" />
									<span>
										<br />
										ชื่อ:{" "}
										<input
											type="text"
											placeholder="ตัวอย่าง นาย เฮง ทำมาค้าขึ้น"
										/>
									</span>
									<span className="Address">
										<br />
										ที่อยู่:{" "}
										<input
											type="text"
											placeholder="ตัวอย่าง 234 ซอย สุขุมวิท 21   แขวงคลองเตยเหนือ เขตวัฒนา กรุงเทพมหานคร 10110 "
										/>
									</span>
									<span>
										<br />
										เลขประจำตัวผู้เสียภาษี:{" "}
										<input type="text" placeholder="0000000000000" />
									</span>
								</p>
							</div>

							<div>
								<p>
									วันที่: <input type="date" id="dt" ref={publishedOnRef} />
									<span>
										<br />
										ผู้ขาย: <input type="text" placeholder="เฮง เฮง" ref={salesNameRef} />
									</span>
									<span>
										<br />
										ครบกำหนด: <input type="date" id="dt" ref={dueDateRef} />
									</span>
								</p>
							</div>
						</div>

						<div
							className="customer_company"
							style={{ fontSize: "13px", textAlign: "left" }}
						>
							<p>
								ชื่อบริษัทลูกค้า:
								<input
									id="customer_name"
									type="text"
									placeholder="ตัวอย่าง บริษัท ชอบซื้อ จำกัด"
									onChange={(e) => setCompanyCustomer_name(e.target.value)}
									ref={contactCompanyNameRef}
								/>
								{/* ---------------error: CompanyCustomer_name---------------- */}
								{error && CompanyCustomer_name.length <=0? <label style={{color: 'red'}}>กรุณากรอกชื่อบริษัทลูกค้า</label>: ''}

								<span>
									<br />
									ชื่อลูกค้า:{" "}
									<input type="text" placeholder="ตัวอย่าง นาย รักดี รักมั่น" ref={contactNameRef} onChange={e =>setCustomer_name(e.target.value)}/>
									{error && customer_name.length <=0? <label style={{color: 'red'}}>กรุณากรอกชื่อลูกค้า</label>: ''}
								</span>
								<span>
									<br />
									ที่อยู่ลูกค้า:{" "}
									<input
										type="text"
										placeholder="ตัวอย่าง 123 ถนนสุรวงศ์ แขวงสุริยวงศ เขตบางรัก กรุงเทพ 10500"
										ref={contactAddressRef}
										onChange={e=>setCustomer_address(e.target.value)}
									/>
									{error && Customer_address.length <=0? <label style={{color: 'red'}}>กรุณากรอกที่อยู่ลูกค้า</label>: ''}
								</span>
								<span>
									<br />
									เลขประจำตัวผู้เสียภาษี:{" "}
									<input type="text" placeholder="1234567891234"
										ref={contactTaxIdRef} 
										onChange={e=>setTax_Number(e.target.value)}
									/>
									{error && Tax_Number.length != 13? <label style={{color: 'red'}}>กรุณากรอกเลขประจำตัวผู้เสียภาษีให้ครบ</label>: ''}
								</span>
							</p>
						</div>

						<div className="description" style={{ fontSize: "13px" }}>
							<strong>ชื่องาน:</strong>

							<table className="table">
								<thead className="thead-dark">
									<tr>
										<th>ลำดับ</th>
										<th>ชื่อสินค้า/รายละเอียด</th>
										<th>จำนวน</th>
										<th>หน่วย</th>
										<th>ราคาต่อหน่วย</th>
										<th>ราคารวม</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<span>1</span>
										</td>

										{/* ---------------error: Name_item_1---------------- */}
										<td class="Name_item">
											<input
												style={{ textAlign: "center" }}
												type="text"
												placeholder="ชื่อสินค้า"
												onChange={(e) => setItemName_1(e.target.value)}
												ref={nameRef1}
											/>
											{error && ItemName_1.length <= 0 ? (
												<label style={{ color: "red" }}>
													กรุณากรอกชื่อสินค้า
												</label>
											) : (
												""
											)}
										</td>

										<td>
											<input
												style={{border:'1px solid red'}}
												type="float"
												placeholder="1"
												value={quantity1}
												onChange={(e) => setQuantity1(e.target.value)}
												onInput={ThousandChange}
											/>
										</td>
										<td>
											<input type="text" placeholder="ชิ้น" ref={unitNameRef1} onChange={(e) => setProductUnit_1(e.target.value)}/>
											{error && ProductUnit_1.length <= 0 ? (
												<label style={{ color: "red" }}>
													กรุณากรอกหน่วยสินค้า
												</label>
											) : (
												""
											)}
											
										</td>
										<td class="Name_item">
											<input
												type="float"
												placeholder="100.00"
												value={price1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
												onChange={(e) => setPrice1(e.target.value)}

											/>
										</td>
										<td>
											<p>
												{amount1
													.toFixed(2)
													.toString()
													.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
											</p>
										</td>
									</tr>

									<tr>
										<td>
											<span>2</span>
										</td>

										{/* ---------------error: Name_item_2---------------- */}
										<td class="Name_item">
											<input
												style={{ textAlign: "center" }}
												type="text"
												placeholder="ชื่อสินค้า"
												onChange={(e) => setItemName_2(e.target.value)}
												ref={nameRef2}
											/>

											{error && ItemName_2.length <= 0 ? (
												<label style={{ color: "red" }}>
													กรุณากรอกชื่อสินค้า
												</label>
											) : (
												""
											)}
										</td>

										<td>
											<input
												type="float"
												placeholder="1"
												value={quantity2}
												onChange={(e) => setQuantity2(e.target.value)}
											/>
										</td>
										<td>
											<input type="text" placeholder="ชิ้น" ref={unitNameRef2}  onChange={(e) => setProductUnit_2(e.target.value)}/>
											{error && ProductUnit_2.length <= 0 ? (
												<label style={{ color: "red" }}>
													กรุณากรอกหน่วยสินค้า
												</label>
											) : (
												""
											)}

										</td>
										<td class="Name_item">
											<input
												type="float"
												placeholder="100.00"
												value={price2}
												onChange={(e) => setPrice2(e.target.value)}
											/>
										</td>
										<td>
											<p>
												{amount2
													.toFixed(2)
													.toString()
													.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
											</p>
										</td>
									</tr>

									<tr>
										<td>
											<span>3</span>
										</td>

										{/* ---------------error: Name_item_3---------------- */}
										<td class="Name_item">
											<input
												style={{ textAlign: "center" }}
												type="text"
												placeholder="ชื่อสินค้า"
												onChange={(e) => setItemName_3(e.target.value)}
												ref={nameRef3}
											/>
											{error && ItemName_3.length <= 0 ? (
												<label style={{ color: "red" }}>
													กรุณากรอกชื่อสินค้า
												</label>
											) : (
												""
											)}
										</td>

										<td>
											<input
												type="float"
												placeholder="1"
												value={quantity3}
												onChange={(e) => setQuantity3(e.target.value)}
											/>
										</td>
										<td>
											<input type="text" placeholder="ชิ้น" ref={unitNameRef3} />
										</td>
										<td class="Name_item">
											<input
												type="float"
												placeholder="100.00"
												value={price3}
												onChange={(e) => setPrice3(e.target.value)}
											/>
										</td>
										<td>
											<p>
												{amount3
													.toFixed(2)
													.toString()
													.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
											</p>
										</td>
									</tr>

									<tr>
										<td>
											<span>4</span>
										</td>

										{/* ---------------error: Name_item_4---------------- */}
										<td class="Name_item">
											<input
												style={{ textAlign: "center" }}
												type="text"
												placeholder="ชื่อสินค้า"
												onChange={(e) => setItemName_4(e.target.value)}
												ref={nameRef4}
											/>
											{error && ItemName_4.length <= 0 ? (
												<label style={{ color: "red" }}>
													กรุณากรอกชื่อสินค้า
												</label>
											) : (
												""
											)}
										</td>
										<td>
											<input
												type="float"
												placeholder="1"
												value={quantity4}
												onChange={(e) => setQuantity4(e.target.value)}
											/>
										</td>
										<td>
											<input type="text" placeholder="ชิ้น" ref={unitNameRef4} />
										</td>
										<td class="Name_item">
											<input
												type="float"
												placeholder="100.00"
												value={price4}
												onChange={(e) => setPrice4(e.target.value)}
											/>
										</td>
										<td>
											<p>
												{amount4
													.toFixed(2)
													.toString()
													.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
											</p>
										</td>
									</tr>

									<tr>
										<button className="buttonAdd" type="button" onClick={postApi}>
											<a
												style={{ color: "black" }}

											>
												+เพิ่มแถวรายการ
											</a>
										</button>
									</tr>
								</tbody>
							</table>
						</div>

						{/* --------------------------Summary---------------------------------- */}

						<div className="summary" style={{ fontSize: "13px" }}>
							<p>
								<span>รวมเป็นเงิน:</span>{" "}
								<span className="result">
									<td>
										{sum
											.toFixed(2)
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
									</td>
								</span>
								<span className="discount">
									<br />
									ส่วนลด
									<input
										style={{ width: "8.5%" }}
										type="float"
										placeholder="5"
										value={numberDiscount}
										onChange={(e) => setNumberDiscount(e.target.value)}
									/>
									%
								</span>
								<span className="result1">
									<td>
										{displayDiscount
											.toFixed(2)
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
									</td>
								</span>
								<span>
									<br />
									ราคาหลังหักส่วนลด
								</span>
								<span className="result2">
									<td>
										{discount
											.toFixed(2)
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
									</td>
								</span>
								<span>
									<br />
									ภาษีมูลค่าเพิ่ม 7%
								</span>
								<span className="result3">
									<td>
										{tax
											.toFixed(2)
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
									</td>
								</span>
								<span>
									<br />
									จำนวนเงินรวมทั้งสิ้น
								</span>
								<span className="result4">
									<td>
										{netTotal
											.toFixed(2)
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
									</td>
								</span>
							</p>
						</div>

						<div className="PDF_img_footer">
							<img src="https://flowaccount.com/blog/wp-content/uploads/2017/01/e27-flowaccount-logo.png" />
						</div>
					</div>
				</div>
			</div>

			<div className="Text_explain_procedure">
				<h2>ใส่ข้อมูลใบเสร็จรับเงิน</h2>
				<p>
					<SiVerizon />
					<span>เพิ่มที่อยู่ลูกค้าของคุณ</span>
				</p>
				<p>
					<SiVerizon />
					<span>เพิ่มหมายเลขใบเสร็จรับเงิน</span>
				</p>
				<p>
					<SiVerizon />
					<span>เพิ่มข้อมูลสินค้า</span>
				</p>
				<p>
					<SiVerizon />
					<span>พิมพ์ใบเสร็จรับเงิน</span>
				</p>

				<div className="Text_Create_quote">
					<h1>สร้างใบเสนอราคา</h1>
					<h1>สร้างใบวางบิล</h1>
					<h1>สร้างใบกำกับภาษี</h1>
				</div>
			</div>
		</div>;

		{
			/* -----------------------------------------Footer----------------------------------------------- */
		}
		<div className="Footer">
			<div className="Sub_Footer">
				<h2>ทดลองใช้โปรเเกรมบัญชี FlowAccount</h2>

				<div className="Btn_Footer">
					<button type="primary" htmlType="submit" className="button-65">
						<a
							style={{ color: "white", textDecoration: "none" }}
							href="https://auth.flowaccount.com/th/Account/Register"
						>
							สมัครใช้งาน
						</a>
					</button>

					<button type="primary" htmlType="submit" className="button-65">
						<a
							style={{ color: "white", textDecoration: "none" }}
							href="https://flowaccount.com/"
						>
							ติดต่อเราา
						</a>
					</button>
				</div>
			</div>
		</div>
	</>
	);
}
