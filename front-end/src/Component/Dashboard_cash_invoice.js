import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import '../Component/Dashboard_cash_invoice.css'
import { Table } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import moment from 'moment'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Dashboard_cash_invoice() {

    let navigate = useNavigate();



    const columns = [
        {
            title: 'DATE',
            dataIndex: 'invoice_date',
            key: 'invoice_date',

        },
        {
            title: 'DOCUMENT NO.',
            dataIndex: 'document_number',
            key: 'document_number',
        },
        {
            title: 'CUSTOMER NAME / PROJECT NAME',
            dataIndex: 'customer_name',
            key: 'customer_name',
        },
        {
            title: 'NET TOTAL',
            dataIndex: 'grand_total',
            key: 'grand_total',
            render: (value) => {
                return "฿ " + value.toLocaleString("en").replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            }
        },
        // {
        //     title: 'STATUS',
        //     dataIndex: '',
        //     key: '',
        // },
    ];
    const [data, setData] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const user_id = localStorage.getItem("user_id");
        console.log(user_id)
        console.log(token)
        const getData = async () => {
            await axios
                .get(`http://localhost:3000/api/cash-invoice-summary/${user_id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((res) => {
                    console.log(res.data.result[0])
                    localStorage.setItem("docNum", res.data.result[0].length)
                    setData(res.data.result[0])
                    res.data.result[0].map(el => {
                        let date = moment(new Date(el.date));
                        el.invoice_date = date.format("DD-MM-YYYY")
                    })
                    console.log(res.data.result[0])
                })
                .catch((err) => {
                    console.error(err);
                }
                );
        };
        getData();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        localStorage.removeItem("docNum");
        localStorage.removeItem("company_name");
        navigate("/");
    }

    return (<>
        <div class="flex relative">
            <div class="sidebar">
                <ul class="nav-links">
                    <li>
                        <a href="" onClick={() => navigate("/dashboard")}>
                            <img src="/img/icon_Flow.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="" onClick={() => navigate("/dashboardcashinvoice")}>
                            <i class='bx bx-dollar'></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bxs-cart-alt'></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bxl-shopify'></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bxs-package'></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bxs-user-circle'></i>
                        </a>
                    </li>
                    <li style={{ borderBottom: '1px solid white' }}>
                        <a href="#">
                            <i class='bx bxs-chalkboard'></i>
                        </a>
                    </li>
                    <li style={{ marginBottom: '1.5rem' }}>
                        <a href="#">
                            <i class='bx bxs-briefcase-alt-2'></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bxs-bell'></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bx-dialpad'></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class='bx bx-cog'></i>
                        </a>
                    </li>
                    <li style={{ borderBottom: '1px solid white' }}>
                        <a href="#">
                            <i class='bx bx-user-circle'></i>
                        </a>
                    </li>
                    <li>
                        <a href="" onClick={handleLogout}>
                            <i class='bx bx-log-out-circle' ></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <div class="py-2 text-center text-sm border-b">
                <span class="mr-2">Your free trial will end in 30 days. Click to Upgrade.</span>
                <button class="bg-orange-400 px-3 py-1 text-white rounded">&hearts; Upgrade Now!</button>
            </div>
            {/* py-2 pr-20 text-right text-s border-t  absolute bottom-0 w-100 h-15 document-summary-footer flex justify-end */}
            {/* <button class="bg-orange-400 px-3 py-1 text-white rounded">&hearts; Upgrade Now!</button> */}
            {/* <div class="py-2 pr-15 px-15 w-100 mt-10 text-right text-s border-t text-blue-500 fixed bottom-0">
                <span class="mr-2">Grand Total</span>
            </div> */}


            <div class="flex justify-between ml-12 mt-3 px-10">
                <div class="text-blue-500 text-3xl">Abbreviated Tax Invoice/Receipt (Cash)</div>
                <div class="space-x-4">
                    <button onClick={() => navigate("/CashInvoice")} class="bg-lime-500 hover:bg-lime-600 text-white py-2 px-4 border-1 border-gray-400 rounded">
                        Create New
                    </button>
                </div>

            </div>

            <div>
                <nav class="flex justify-between ml-12 mt-3 px-10">
                    <ul class="breadcrumb">
                        <li>
                            <a href="#" class="text-gray-500 text-sm no-underline">Abbreviated Tax Invoice/Receipt (Cash)</a>
                        </li>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 rounded-full " viewBox="0 0 20 20" fill="gray">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" class="bg-gray-500" />
                        </svg>

                        <li class="text-gray-500  text-sm">Show All</li>
                    </ul>
                </nav>
                <div class="flex justify-between ml-12 mt-3 px-10 h-50 w-35">
                    <button class="bg-sky-100 hover:bg-sky-200 text-blue-500 border-gray-300  border-1 py-1.5 px-4 rounded-full">
                        Show All
                    </button>
                    <div class="rounded-full border-1 border-gray-300 py-1.5 px-0.2">
                        <svg width="40" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z" fill="currentColor"
                            />
                        </svg>
                    </div>
                </div>
            </div><br></br>


            {/* ANTD TABLE */}
            <div class="ml-12 mb-8 px-10">
                <Table dataSource={data} columns={columns} pagination={false} />
            </div>




            {/* chat icon 
                <div class="col-11 mr--5 mb-9 px- pr--5 w-90 h-0  absolute bottom-7 flex justify-end">
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"
                            class=" border-1 mr-7 rounded-full bg-sky-100">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                    </button>
                </div>*/}
        </div>


        {/* footer 
            <div class=" ">
                <div class="py-2 pr-20 text-right text-s border-t  absolute bottom-0 w-100 h-15 document-summary-footer flex justify-end ">
                    <span class="mr-14 text-blue-500 ">Grand Total</span>
                </div>
            </div> */}


    </>
    )
}
