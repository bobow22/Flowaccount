import React from "react";
import "../Component/Cash_invoice.css";
import { SiVerizon } from "react-icons/si";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useRef } from "react";

export default function Cash_invoice() {
  const getToken = async () => {
    const result = await axios.get("http://localhost:3000/");
    console.log(result.data.access_token);
    localStorage.setItem("token", result.data.access_token);
  };

  getToken();

  const token = localStorage.getItem("token");

  // if (token) {
  //   axios
  //     .get("http://localhost:3000/company", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((res) => {
  //       setCart(res.data);
  //     })
  //     .catch((err) => {
  //       if (err.response.status === 401) {
  //         // token expired - remove and redirect to login
  //         localStorage.removeItem("token");
  //         navigate("/login");
  //       }
  //     });
  // }

  // const getCompanyData = async () => {
  //   const companyData = await axios.get("http://localhost:3000/");
  // };

  const contactNameRef = useRef("");
  const contactAddressRef = useRef("");
  const contactTaxIdRef = useRef("");
  const publishedOnRef = useRef("");
  const salesNameRef = useRef("");
  const dueDateRef = useRef("");
  const totalAfterDiscountRef = useRef("");
  const grandTotalRef = useRef("");

  const nameRef1 = useRef("");
  const quantityRef1 = useRef("");
  const unitNameRef1 = useRef("");
  const pricePerUnitRef1 = useRef("");
  const totalRef1 = useRef("");

  const nameRef2 = useRef("");
  const quantityRef2 = useRef("");
  const unitNameRef2 = useRef("");
  const pricePerUnitRef2 = useRef("");
  const totalRef2 = useRef("");

  const nameRef3 = useRef("");
  const quantityRef3 = useRef("");
  const unitNameRef3 = useRef("");
  const pricePerUnitRef3 = useRef("");
  const totalRef3 = useRef("");

  const nameRef4 = useRef("");
  const quantityRef4 = useRef("");
  const unitNameRef4 = useRef("");
  const pricePerUnitRef4 = useRef("");
  const totalRef4 = useRef("");

  const postApi = async () => {
    axios
      .post("http://localhost:3000/post-receipt", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        dataObj: {
          contactName: contactNameRef.current.value,
          contactAddress: contactAddressRef.current.value,
          contactTaxIdRef: contactAddressRef.current.value,
          publishedOn: publishedOnRef.current.value,
          salesName: salesNameRef.current.value,
          dueDate: dueDateRef.current.value,
          totalAfterDiscount: parseInt(totalAfterDiscountRef.current.value),
          grandTotal: parseInt(grandTotalRef.current.value),
          items: [
            {
              name: nameRef1.current.value,
              quantity: parseInt(quantityRef1.current.value),
              unitName: unitNameRef1.current.value,
              pricePerUnit: parseInt(pricePerUnitRef1.current.value),
              total: parseInt(totalRef1.current.value),
            },
            {
              name: nameRef2.current.value,
              quantity: parseInt(quantityRef2.current.value),
              unitName: unitNameRef2.current.value,
              pricePerUnit: parseInt(pricePerUnitRef2.current.value),
              total: parseInt(totalRef2.current.value),
            },
            {
              name: nameRef3.current.value,
              quantity: parseInt(quantityRef3.current.value),
              unitName: unitNameRef3.current.value,
              pricePerUnit: parseInt(pricePerUnitRef3.current.value),
              total: parseInt(totalRef3.current.value),
            },
            {
              name: nameRef4.current.value,
              quantity: parseInt(quantityRef4.current.value),
              unitName: unitNameRef4.current.value,
              pricePerUnit: parseInt(pricePerUnitRef4.current.value),
              total: parseInt(totalRef4.current.value),
            },
          ],
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <>
      {/* -----------------------------------------Header----------------------------------------------- */}
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

      {/* -----------------------------------------Content----------------------------------------------- */}
      <div className="Content">
        <div className="Btn_and_PDF">
          <div className="Btn_Content">
            <button type="submit" className="button-1" onClick={postApi}>
              ส่ง
            </button>
            <button type="submit" className="button-1" onClick={postApi}>
              บันทึก
            </button>
            <button type="submit" className="button-1" onClick={postApi}>
              รับ PDF
            </button>
            <button type="submit" className="button-1" onClick={postApi}>
              พิมพ์
            </button>
          </div>

          <div className="PDF" style={{ marginTop: "25px" }}>
            {/* <img src='https://edit.org/images/cat/invoices-big-2019042509.jpg'/> */}
            <div className="receipt">
              <h3>ใบเสร็จรับเงิน</h3>

              <div
                className="my_company"
                style={{ fontSize: "13px", textAlign: "left" }}
              >
                <div>
                  <p>
                    ชื่อบริษัท: <input type="text" />
                    <span>
                      <br />
                      ชื่อ: <input type="text" />
                    </span>
                    <span>
                      <br />
                      ที่อยู่: <input type="text" />
                    </span>
                    <span>
                      <br />
                      เลขประจำตัวผู้เสียภาษี: <input type="text" />
                    </span>
                  </p>
                </div>

                <div>
                  <p>
                    วันที่: <input type="text" ref={publishedOnRef} />
                    <span>
                      <br />
                      ผู้ขาย: <input type="text" ref={salesNameRef} />
                    </span>
                    <span>
                      <br />
                      ครบกำหนด: <input type="text" ref={dueDateRef} />
                    </span>
                  </p>
                </div>
              </div>

              <div
                className="customer_company"
                style={{ fontSize: "13px", textAlign: "left" }}
              >
                <p>
                  ชื่อบริษัทลูกค้า: <input type="text" ref={contactNameRef} />
                  <span>
                    <br />
                    ชื่อลูกค้า: <input type="text" />
                  </span>
                  <span>
                    <br />
                    ที่อยู่ลูกค้า: <input type="text" ref={contactAddressRef} />
                  </span>
                  <span>
                    <br />
                    เลขประจำตัวผู้เสียภาษี:{" "}
                    <input type="text" ref={contactTaxIdRef} />
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
                        <input
                          style={{ textAlign: "left" }}
                          type="text"
                          placeholder="1"
                        />
                      </td>
                      <td>
                        <input
                          style={{ textAlign: "left" }}
                          type="text"
                          placeholder="ชื่อสินค้า"
                          ref={nameRef1}
                        />
                      </td>
                      <td>
                        <input type="text" placeholder="1" ref={quantityRef1} />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="ชิ้น"
                          ref={unitNameRef1}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="100.00"
                          ref={pricePerUnitRef1}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="100.00"
                          ref={totalRef1}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <input
                          style={{ textAlign: "left" }}
                          type="text"
                          placeholder="2"
                        />
                      </td>
                      <td>
                        <input
                          style={{ textAlign: "left" }}
                          type="text"
                          placeholder="ชื่อสินค้า"
                          ref={nameRef2}
                        />
                      </td>
                      <td>
                        <input type="text" placeholder="1" ref={quantityRef2} />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="ตัว"
                          ref={unitNameRef2}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="0.00"
                          ref={pricePerUnitRef2}
                        />
                      </td>
                      <td>
                        <input type="text" placeholder="0.00" ref={totalRef2} />
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <input
                          style={{ textAlign: "left" }}
                          type="text"
                          placeholder="3"
                        />
                      </td>
                      <td>
                        <input
                          style={{ textAlign: "left" }}
                          type="text"
                          placeholder="ชื่อสินค้า"
                          ref={nameRef3}
                        />
                      </td>
                      <td>
                        <input type="text" placeholder="1" ref={quantityRef3} />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="ตัว"
                          ref={unitNameRef3}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="0.00"
                          ref={pricePerUnitRef3}
                        />
                      </td>
                      <td>
                        <input type="text" placeholder="0.00" ref={totalRef3} />
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <input
                          style={{ textAlign: "left" }}
                          type="text"
                          placeholder="4"
                        />
                      </td>
                      <td>
                        <input
                          style={{ textAlign: "left" }}
                          type="text"
                          placeholder="ชื่อสินค้า"
                          ref={nameRef4}
                        />
                      </td>
                      <td>
                        <input type="text" placeholder="1" ref={quantityRef4} />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="ตัว"
                          ref={unitNameRef4}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="0.00"
                          ref={pricePerUnitRef4}
                        />
                      </td>
                      <td>
                        <input type="text" placeholder="0.00" ref={totalRef4} />
                      </td>
                    </tr>

                    <tr>
                      <button
                        className="buttonAdd"
                        type="button"
                        onClick={postApi}
                      >
                        <a style={{ color: "black" }}>+เพิ่มแถวรายการ</a>
                      </button>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="summary" style={{ fontSize: "13px" }}>
                <p>
                  รวมเป็นเงิน:{" "}
                  <span className="result">
                    <td>
                      <input type="text" value="100.00" />
                    </td>
                  </span>
                  <span>
                    <br />
                    ส่วนลด 5%
                  </span>
                  <span className="result1">
                    <td>
                      <input type="text" value="5.00" />
                    </td>
                  </span>
                  <span>
                    <br />
                    ราคาหลังหักส่วนลด
                  </span>
                  <span className="result2">
                    <td>
                      <input type="text" ref={totalAfterDiscountRef} />
                    </td>
                  </span>
                  <span>
                    <br />
                    ภาษีมูลค่าเพิ่ม 7%
                  </span>
                  <span className="result3">
                    <td>
                      <input type="text" value="6.65" />
                    </td>
                  </span>
                  <span>
                    <br />
                    จำนวนเงินรวมทั้งสิ้น
                  </span>
                  <span className="result4">
                    <td>
                      <input type="text" ref={grandTotalRef} />
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
        </div>
      </div>

      {/* -----------------------------------------Footer----------------------------------------------- */}
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
                ติดต่อเรา
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
