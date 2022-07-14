import React, { useState } from "react";
import "../Component/Cash_invoice.css";
import { SiVerizon } from "react-icons/si";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Cash_invoice() {

	let navigate = useNavigate();

	const token = localStorage.getItem("token");
	const user_id = localStorage.getItem("user_id");



	// FLOWACCOUT ------------------------------------------------------------------------
	const [companyNameEn, setCompanyNameEn] = useState('')
	const [companyName, setCompanyName] = useState('')
	const [companyAddress, setCompanyAddress] = useState('')
	const [companyTaxId, setCompanyTaxId] = useState('')

	useEffect(() => {
		console.log(token)
		const getCompanyInfo = async () => {
			await axios
				.get("http://13.215.205.13:3000/company", {
					headers: {
						Authorization: `Bearer ${token}`,
					}
				})
				.then((res) => {
					console.log(res.data.data.companyName)
					setCompanyNameEn(res.data.data.companyNameEn)
					setCompanyName(res.data.data.companyName)
					setCompanyAddress(res.data.data.companyAddress)
					setCompanyTaxId(res.data.data.companyTaxId)
				})
				.catch((err) => {
					console.error(err);
				}
				);
		}
		getCompanyInfo();
	}, [])

	// const [companyName, setCompanyName] = useState('');
	// const [name, setName] = useState('');
	// const [companyAddress, setCompanyAddress] = useState('');
	// const [companyTaxId, setCompanyTaxId] = useState('');

	// useEffect(() => {

	// 	console.log(token)
	// 	const getCompanyInfo = async () => {
	// 		await axios
	// 			.get("http://13.215.205.13:3000/company", {
	// 				headers: {
	// 					Authorization: `Bearer ${token}`,

	// 				},

	// 			})
	// 			.then((res) => {
	// 				console.log(res.data.result[0].company_name)
	// 				setCompanyName(res.data.result[0].company_name)
	// 				setName(res.data.result[0].first_name + " " + res.data.result[0].last_name)
	// 				setCompanyAddress(res.data.result[0].company_address)
	// 				setCompanyTaxId(res.data.result[0].tax_id)
	// 			})
	// 			.catch((err) => {
	// 				console.error(err);
	// 			}
	// 			);
	// 	}
	// 	getCompanyInfo();
	// }, [])

	//------------------------Thousand separator input with React Hooks--------------------------//



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

	const [DocumentNumber, setDocumentNumber] = useState(0);

	const [error, setError] = useState('')


	// FLOWACCOUNT ------------------------------------------------------------------------------------
	const handleSubmit = (e) => {
		e.preventDefault()
		//--------------Error 
		if (customer_name.length === 0 || CompanyCustomer_name.length === 0 || Customer_address.length === 0 || Tax_Number.length != 13 || ItemName_1.length === 0 || ItemName_2.length === 0 || ItemName_3.length === 0 || ItemName_4.length === 0 || ProductUnit_1.length === 0 || ProductUnit_2.length === 0 || ProductUnit_3.length === 0 || ProductUnit_4.length === 0) {

			setError(true)

			//--------------React-Toastify----------------
			toast.error("Error!", {
				position: "top-center",
			});

		} else {
			axios
				.post("http://13.215.205.13:3000/cash-invoice", {
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

			//--------------React-Toastify----------------
			toast.success(`Successfull!`, {
				position: "top-center",
			});
		}



	}

	let docNum = parseInt(localStorage.getItem("docNum")) + 1;
	console.log(docNum.toString().length)

	if (docNum.toString().length === 1) {
		docNum = "000" + docNum;
	} else if (docNum.toString().length === 2) {
		docNum = "00" + docNum;
	} else if (docNum.toString().length === 3) {
		docNum = "0" + docNum;
	}

	let dateObj = new Date();
	// let month = dateObj.getUTCMonth() + 1; //months from 1-12
	// console.log(month)
	// let day = dateObj.getUTCDate();
	// console.log(day)
	let year = dateObj.getUTCFullYear();
	console.log(year)

	let month = String(dateObj.getUTCMonth() + 1);
	if (month.length === 1) {
		month = "0" + month;
	}
	let day = String(dateObj.getUTCDate());
	if (day.length === 1) {
		day = "0" + day;
	}

	let newDate = year.toString() + month + day;
	console.log(newDate)

	// const handleSubmit = (e) => {
	// 	e.preventDefault()
	// 	//--------------Error 
	// 	if (customer_name.length === 0 || CompanyCustomer_name.length === 0 || Customer_address.length === 0 || Tax_Number.length != 13 || ItemName_1.length === 0 || ItemName_2.length === 0 || ItemName_3.length === 0 || ItemName_4.length === 0 || ProductUnit_1.length === 0 || ProductUnit_2.length === 0 || ProductUnit_3.length === 0 || ProductUnit_4.length === 0) {

	// 		setError(true)

	// 		//--------------React-Toastify----------------
	// 		toast.error("Error!", {
	// 			position: "top-center",
	// 		});

	// 	} else {
	// 		setDocumentNumber(DocumentNumber + 1)

	// 		axios
	// 			.post("http://13.215.205.13:3000/cash-invoice", {
	// 				headers: {
	// 					Authorization: `Bearer ${token}`,
	// 				},
	// 				// dataObj: {
	// 				user_id: user_id,
	// 				document_number: "CA" + newDate + docNum,
	// 				customer_company: contactCompanyNameRef.current.value,
	// 				customer_name: contactCompanyNameRef.current.value,
	// 				customer_address: contactAddressRef.current.value,
	// 				customer_tax_id: contactAddressRef.current.value,
	// 				date: publishedOnRef.current.value,
	// 				salesperson: salesNameRef.current.value,
	// 				due_date: dueDateRef.current.value,

	// 				sub_total: sum,
	// 				discount: numberDiscount,
	// 				total_after_discount: discount,
	// 				vat: tax,
	// 				grand_total: netTotal,

	// 				items: [
	// 					{
	// 						item_name: nameRef1.current.value,
	// 						item_quantity: quantity1,
	// 						item_unit: unitNameRef1.current.value,
	// 						price_per_unit: price1,
	// 						item_total: amount1,
	// 					},
	// 					{
	// 						item_name: nameRef2.current.value,
	// 						item_quantity: quantity2,
	// 						item_unit: unitNameRef2.current.value,
	// 						price_per_unit: price2,
	// 						item_total: amount2,
	// 					},
	// 					{
	// 						item_name: nameRef3.current.value,
	// 						item_quantity: quantity3,
	// 						item_unit: unitNameRef3.current.value,
	// 						price_per_unit: price3,
	// 						item_total: amount3,
	// 					},
	// 					{
	// 						item_name: nameRef4.current.value,
	// 						item_quantity: quantity4,
	// 						item_unit: unitNameRef4.current.value,
	// 						price_per_unit: price4,
	// 						item_total: amount4,
	// 					},
	// 				],
	// 				// },
	// 			})
	// 			.then((res) => {
	// 				console.log(res)
	// 				// navigate("/DashboardCashInvoice");
	// 			})
	// 			.catch((err) => {
	// 				console.error(err)
	// 			})

	// 		//--------------React-Toastify----------------
	// 		toast.success("Successfull!", {
	// 			position: "top-center",
	// 		});
	// 	}




	// }


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
		</div>
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
						onClick={handleSubmit}
					>

						ส่ง
					</button>

					<button type="submit" id='button_save' className="button-2" onClick={handleSubmit}>
						บันทึก
					</button>
					<button type="submit" style={{ marginLeft: '10px', marginRight: '10px' }} className="button-2" onClick={handleSubmit}>
						รับ PDF
					</button>
					<button type="submit" className="button-2" onClick={handleSubmit}>
						พิมพ์
					</button>
				</div>
				<ToastContainer />
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
									<input type="text" value={companyNameEn} />
									{/* <input type="text" value={companyName} /> */}
									<span>
										<br />
										ชื่อ:{" "}
										<input
											type="text"
											value={companyName}
										// value={name}
										/>
									</span>
									<span className="Address">
										<br />
										ที่อยู่:{" "}
										<input
											type="text"
											value={companyAddress}
										/>
									</span>
									<span>
										<br />
										เลขประจำตัวผู้เสียภาษี:{" "}
										<input type="text" value={companyTaxId} />
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
								{error && CompanyCustomer_name.length <= 0 ? <label style={{ color: 'red' }}>กรุณากรอกชื่อบริษัทลูกค้า</label> : ''}

								<span>
									<br />
									ชื่อลูกค้า:{" "}
									<input type="text" placeholder="ตัวอย่าง นาย รักดี รักมั่น" ref={contactNameRef} onChange={e => setCustomer_name(e.target.value)} />
									{error && customer_name.length <= 0 ? <label style={{ color: 'red' }}>กรุณากรอกชื่อลูกค้า</label> : ''}
								</span>
								<span>
									<br />
									ที่อยู่ลูกค้า:{" "}
									<input
										type="text"
										placeholder="ตัวอย่าง 123 ถนนสุรวงศ์ แขวงสุริยวงศ เขตบางรัก กรุงเทพ 10500"
										ref={contactAddressRef}
										onChange={e => setCustomer_address(e.target.value)}
									/>
									{error && Customer_address.length <= 0 ? <label style={{ color: 'red' }}>กรุณากรอกที่อยู่ลูกค้า</label> : ''}
								</span>
								<span>
									<br />
									เลขประจำตัวผู้เสียภาษี:{" "}
									<input type="text" placeholder="1234567891234"
										ref={contactTaxIdRef}
										onChange={e => setTax_Number(e.target.value)}
									/>
									{error && Tax_Number.length != 13 ? <label style={{ color: 'red' }}>กรุณากรอกเลขประจำตัวผู้เสียภาษีให้ครบ</label> : ''}
								</span>
							</p>
						</div>

						<div className="description" style={{ fontSize: "13px" }}>
							<strong>ชื่องาน:</strong>

							<table className="table">
								<thead className="thead-dark">
									<tr>
										<th>ลำดับ</th>
										<th style={{ width: "20%" }}>ชื่อสินค้า/รายละเอียด</th>
										<th>จำนวน</th>
										<th>หน่วย</th>
										<th>ราคาต่อหน่วย</th>
										<th style={{ width: "10%" }}>ราคารวม</th>
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
												// style={{ border: '1px solid red' }}
												type="float"
												placeholder="1"
												value={quantity1.toString()
													.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}

												onChange={(e) => setQuantity1(e.target.value)}

											/>
										</td>
										<td>
											<input type="text" placeholder="ชิ้น" ref={unitNameRef1} onChange={(e) => setProductUnit_1(e.target.value)} />
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
												value={price1}
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
											<input type="text" placeholder="ชิ้น" ref={unitNameRef2} onChange={(e) => setProductUnit_2(e.target.value)} />
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
											<input type="text" placeholder="ชิ้น" ref={unitNameRef3} onChange={e => setProductUnit_3(e.target.value)} />
											{error && ProductUnit_3.length <= 0 ? (
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
											<input type="text" placeholder="ชิ้น" ref={unitNameRef4} onChange={e => setProductUnit_4(e.target.value)} />
											{error && ProductUnit_4.length <= 0 ? (
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
										<button className="buttonAdd" type="button" onClick={handleSubmit}>
											<a style={{ color: "black" }}>
												+เพิ่มแถวรายการ
											</a>
										</button>
									</tr>
								</tbody>
							</table>
						</div>

						{/* --------------------------Summary---------------------------------- */}
						<div className="summary1">
							<div></div>
							<div>
								<div className="summary1-row">
									<div className="summary1-left">
										รวมเป็นเงิน:
									</div>
									<div className="summary1-right">
										{sum
											.toFixed(2)
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
									</div>
								</div>

								<div className="summary1-row">
									<div className="summary1-left">
										ส่วนลด <input type="float"
											placeholder="5"
											value={numberDiscount}
											onChange={(e) => setNumberDiscount(e.target.value)} /> %
									</div>
									<div className="summary1-right">
										{displayDiscount
											.toFixed(2)
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
									</div>
								</div>

								<div className="summary1-row">
									<div className="summary1-left">
										ราคาหลังหักส่วนลด
									</div>
									<div className="summary1-right">
										{discount
											.toFixed(2)
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
									</div>
								</div>

								<div className="summary1-row">
									<div className="summary1-left">
										ภาษีมูลค่าเพิ่ม 7%
									</div>
									<div className="summary1-right">
										{tax
											.toFixed(2)
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
									</div>
								</div>

								<div className="summary1-row">
									<div className="summary1-left">
										จำนวนเงินรวมทั้งสิ้น
									</div>
									<div className="summary1-right">
										{netTotal
											.toFixed(2)
											.toString()
											.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
									</div>
								</div>
							</div>
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

				{/* <div className="Text_Create_quote">
					<h1>สร้างใบเสนอราคา</h1>
					<h1>สร้างใบวางบิล</h1>
					<h1>สร้างใบกำกับภาษี</h1>
				</div> */}
			</div>
		</div>;

		{
			/* -----------------------------------------Footer----------------------------------------------- */
		}
		<div className="Footer">
			<div className="Sub_Footer">
				<h2>ทดลองใช้โปรเเกรมบัญชีออนไลน์ FlowAccount</h2>

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
							ติดต่อเรา
						</a>
					</button>
				</div>
			</div>
		</div>
	</>
	)
}
