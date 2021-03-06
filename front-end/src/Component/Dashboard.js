import React, { useState, useEffect } from 'react'
import '../Component/Dashboard.css'
import 'boxicons'
import Carousel from "react-elastic-carousel"
import {
    Chart as ChartJS,
    CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, DoughnutController, ArcElement
} from 'chart.js'
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2"
import axios from 'axios'
import { useNavigate } from "react-router-dom";


ChartJS.register(
    CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, DoughnutController, ArcElement
)

export default function Dashboard() {

    let navigate = useNavigate();

    const user_id = localStorage.getItem("user_id");

    const [chartData, setChartData] = useState({
        datasets: [],
    })

    const [chartOptions, setChartOptions] = useState({})

    const [data, setData] = useState({
        datasets: [{}],
        labels: []
    });

    const [totalIncome, setTotalIncome] = useState(0)
    console.log(totalIncome == 0)
    const [show, setShow] = useState(false);

    useEffect(() => {
        const getDashboardData = async () => {
            const res = await axios.get(`http://13.215.205.13:3000/api/dashboard/${user_id}`);
            console.log(res.data)
            if (res.data.length === 0) {
                setShow(false);
            } else {
                setShow(true);
            }

            const totalIncome = res.data.map(item => parseFloat(item['sum(item_total)'])).reduce((prev, curr) => prev + curr, 0)
            setTotalIncome(totalIncome.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }))

            const label = [];
            const data = [];

            const top5 = res.data.slice(0, 5);
            const others = res.data.slice(5);
            const sumOthers = others.map(item => parseFloat(item['sum(item_total)'])).reduce((prev, curr) => prev + curr, 0)

            for (let i of (top5)) {
                label.push(i.item_name);
                data.push(i['sum(item_total)']);
            }
            label.push("Others")
            data.push(sumOthers)

            setData({
                datasets: [{
                    data: data,
                    backgroundColor: [
                        // "#00abf0",
                        // "#19bdff",
                        // "#55ceff",
                        // "#91e0ff",
                        // "#b9ebff",
                        // "#e1f6ff"
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 0.3)",
                    ],
                    borderColor: [
                        // "#00abf0",
                        // "#19bdff",
                        // "#55ceff",
                        // "#91e0ff",
                        // "#b9ebff",
                        // "#e1f6ff"
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 0.3)",
                    ],
                }],
                labels: label,

            })
            setChartOptions({
                // responsive: true,
                plugins: {
                    legend: {
                        position: "top"
                    },
                    title: {
                        display: false,
                        text: "",
                    }
                }
            })
        };
        getDashboardData();
    }, [])

    useEffect(() => {
        setChartData({
            labels: ["John", "Kevin", "Geroge", "Micheal", "Oreo"],
            datasets: [
                {
                    label: "Whom'st let the dogs out",
                    data: [12, 55, 34, 120, 720],
                    borderColor: "rgb(53, 162, 235)",
                    backgroundColor: "rgba(53, 162, 235, 0.4)",
                }
            ]
        })
        setChartOptions({
            responsive: true,
            plugins: {
                legend: {
                    position: "top"
                },
                title: {
                    display: true,
                    text: "Whom'st let the dogs out",
                }
            }
        })
    }, [])

    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    const [showDropdown3, setShowDropdown3] = useState(false);
    const [showDropdown4, setShowDropdown4] = useState(false);
    const [showDropdown5, setShowDropdown5] = useState(false);
    const [showDropdown6, setShowDropdown6] = useState(false);
    const [showDropdown7, setShowDropdown7] = useState(false);
    const handleClick1 = () => {
        setShowDropdown1(!showDropdown1);
    }
    const handleClick2 = () => {
        setShowDropdown2(!showDropdown2);
    }
    const handleClick3 = () => {
        setShowDropdown3(!showDropdown3);
    }
    const handleClick4 = () => {
        setShowDropdown4(!showDropdown4);
    }
    const handleClick5 = () => {
        setShowDropdown5(!showDropdown5);
    }
    const handleClick6 = () => {
        setShowDropdown6(!showDropdown6);
    }
    const handleClick7 = () => {
        setShowDropdown7(!showDropdown7);
    }


    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
    ];

    const company_name = localStorage.getItem("company_name")
    const customer_id = localStorage.getItem("user_id")

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");
        localStorage.removeItem("docNum");
        localStorage.removeItem("company_name");
        navigate("/");
    }

    return (<>
        <div class='flex'>
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
                    <li>
                        <a href="#">
                            <i class='bx bxs-briefcase-alt-2'></i>
                        </a>
                    </li>
                </ul>
                <ul class="nav-links">
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

            <div>
                <div class="py-2 text-center text-sm border-b">
                    <span class="mr-2">Your free trial will end in 30 days. Click to Upgrade.</span>
                    <button class="bg-orange-400 px-3 py-1 text-white rounded">&hearts; Upgrade Now!</button>

                </div>

                <div class="flex justify-between ml-12 mt-3 px-10">
                    <div class="text-blue-500 text-3xl">Dashboard</div>
                    <div class="space-x-4">
                        {/* <a href='' class="text-sm text-gray-500 hover:border-b border-gray-500 hover:text-gray-500" style={{ textDecoration: "none" }}>TH</a> */}
                        <a href='' class="text-sm bg-gray-200 text-black rounded px-5 text-left" style={{ textAlign: "left", textDecoration: "none" }}>{company_name}</a>
                        <span class="text-xs"><strong>Customer ID:</strong><span class="text-blue-500"> {customer_id}</span></span>
                    </div>
                </div>



                {/* slider section */}
                <div class="text-blue-500 text-2xl ml-12 mt-8 px-10">Recent Updates</div>

                <div class="ml-12 grid px-10 py-2 gap-3">
                    <Carousel breakPoints={breakPoints}>
                        <div class="rounded overflow-hidden">
                            <img class="w-full hover:cursor-pointer transition duration-300 hover:scale-105 hover:grayscale " src="/img/08.PNG" alt="" />
                            <p class="py-2 text-gray-700 text-sm hover:cursor-pointer">
                                Share document link to accept payment via credit card. Just connect with Omise.
                            </p>
                        </div>

                        <div class="rounded overflow-hidden">
                            <img class="w-full hover:cursor-pointer transition duration-300 hover:scale-105 hover:grayscale" src="/img/01.PNG" alt="" />
                            <p class="py-2 text-gray-700 text-sm hover:cursor-pointer">
                                Mobile POS solutions (Beta) to help you bill customers at front.
                            </p>
                        </div>

                        <div class="rounded overflow-hidden">
                            <img class="w-full hover:cursor-pointer transition duration-300 hover:scale-105 hover:grayscale" src="/img/02.PNG" alt="" />
                            <p class="py-2 text-gray-700 text-sm hover:cursor-pointer">
                                A simpler way to combine bills and schedule any payments.
                            </p>
                        </div>

                        <div class="rounded overflow-hidden">
                            <img class="w-full hover:cursor-pointer transition duration-300 hover:scale-105 hover:grayscale" src="/img/03.PNG" alt="" />
                            <p class="py-2 text-gray-700 text-sm hover:cursor-pointer">
                                Tracking cost, revenue and profit of all projects at a glance.
                            </p>
                        </div>

                        <div class="rounded overflow-hidden">
                            <img class="w-full hover:cursor-pointer transition duration-300 hover:scale-105 hover:grayscale " src="/img/04.PNG" alt="" />
                            <p class="py-2 text-gray-700 text-sm hover:cursor-pointer">
                                e-Tax invoice that save you time and money. Simply send by email.
                            </p>
                        </div>

                        <div class="rounded overflow-hidden">
                            <img class="w-full hover:cursor-pointer transition duration-300 hover:scale-105 hover:grayscale" src="/img/05.PNG" alt="" />
                            <p class="py-2 text-gray-700 text-sm hover:cursor-pointer">
                                Get sales data and track inventory instantly from your online store.
                            </p>
                        </div>

                        <div class="rounded overflow-hidden">
                            <img class="w-full hover:cursor-pointer transition duration-300 hover:scale-105 hover:grayscale" src="/img/06.PNG" alt="" />
                            <p class="py-2 text-gray-700 text-sm hover:cursor-pointer">
                                Run payroll and make payments online, no matter where you are.
                            </p>
                        </div>

                        <div class="rounded overflow-hidden">
                            <img class="w-full hover:cursor-pointer transition duration-300 hover:scale-105 hover:grayscale" src="/img/07.PNG" alt="" />
                            <p class="py-2 text-gray-700 text-sm hover:cursor-pointer">
                                Scan, upload and record expenses with OCR technology.
                            </p>
                        </div>

                    </Carousel>
                </div>
                {/* slider section */}

                {/* Take a Tour */}
                <div class="ml-12 mb-8 px-10">
                    <div class="rounded-md shadow-md p-6">
                        <div class="pb-4 text-center text-2xl">Take a Tour of Flow Account With These Easy Steps</div>

                        <div class="flex">
                            <div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 items-center">
                                <div class="px-8 text-center">
                                    <p>Get your Free Demo!</p>
                                    <div class="flex justify-center p-1"><img class="w-28 h-28" src="/img/Account.png" alt="" /></div>

                                    <span class="inline-block pt-3 text-sm">
                                        Contact Our Team
                                    </span>
                                    <span class="block my-2 text-gray-500 text-xs">
                                        To schedule a free demo via video call
                                    </span>
                                    <span class="block my-2 text-blue-500 hover:cursor-pointer">???? 02-026-8991</span>

                                    <div class="">
                                        <button
                                            class="inline-block bg-blue-500 rounded-md px-2 py-1 text-sm text-white mr-2 mb-2"
                                        >
                                            Request for demo
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4">
                                <div class="text-center px-4 mt-2">
                                    <div class="flex justify-center mb-4"><img src="/img/start_1.PNG" alt="" /></div>
                                    <div class="flex justify-center"><div class="w-12 h-12 rounded-full border"></div></div>
                                    <span class="inline-block pt-3 text-sm">
                                        How to create quotation
                                    </span>
                                    <span class="block my-2 text-gray-500 text-xs mx-4">
                                        Create and quote your client in a snap.
                                    </span>
                                    <div class="">
                                        <button
                                            class="inline-block bg-green-500 rounded-md px-4 py-1 text-sm text-white mr-2 mb-2"
                                        >
                                            Take the tour
                                        </button></div>
                                </div>

                                <div class="text-center px-4 mt-2">
                                    <div class="flex justify-center mb-4"><img src="/img/start_2.PNG" alt="" /></div>
                                    <div class="flex justify-center"><div class="w-12 h-12 rounded-full border"></div></div>
                                    <span class="inline-block pt-3 text-sm">
                                        How to issue invoices
                                    </span>
                                    <span class="block my-2 text-gray-500 text-xs">
                                        Track document status and see who owes you.
                                    </span>
                                    <div class="">
                                        <button
                                            class="inline-block bg-green-500 rounded-md px-4 py-1 text-sm text-white mr-2 mb-2"
                                        >
                                            Take the tour
                                        </button></div>
                                </div>

                                <div class="text-center px-4 mt-2">
                                    <div class="flex justify-center mb-4"><img src="/img/start_3.PNG" alt="" /></div>
                                    <div class="flex justify-center"><div class="w-12 h-12 rounded-full border"></div></div>
                                    <span class="inline-block pt-3 text-sm">
                                        Add Business Details
                                    </span>
                                    <span class="block my-2 text-gray-500 text-xs">
                                        Prepare business details to start invoicing right away.
                                    </span>
                                    <div class="">
                                        <button
                                            class="inline-block bg-green-500 rounded-md px-4 py-1 text-sm text-white mb-2"
                                        >
                                            Start
                                        </button></div>
                                </div>

                                <div class="text-center px-4 mt-2">
                                    <div class="flex justify-center mb-4"><img src="/img/start_4.PNG" alt="" /></div>
                                    <div class="flex justify-center"><div class="w-12 h-12 rounded-full border"></div></div>
                                    <span class="inline-block pt-3 text-sm">
                                        How to add users
                                    </span>
                                    <span class="block my-2 text-gray-500 text-xs">
                                        Manage users permission such as accountant or sales.
                                    </span>
                                    <div class="">
                                        <button
                                            class="inline-block bg-green-500 rounded-md px-4 py-1 text-sm text-white mr-2 mb-2"
                                        >
                                            Take the tour
                                        </button></div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* Take a Tour */}

                {/* Dashboard 1,2 copy */}
                <div class="ml-12 mb-8 px-10 ">
                    <div
                        class="grid sm:grid-cols-1 lg:grid-cols-2 gap-4"
                    >

                        {/* 1 copy */}
                        <div class="card py-2 rounded-md shadow-md pb-4">
                            <a
                                class="no-underline py-2 px-4 border-gray-300 border-b text-blue-500 text-lg font-semibold"
                                href=""
                            >Sales by Product<div class="inline-block px-2"><i class='bx bxs-info-circle'></i></div></a
                            >

                            <button onClick={handleClick1} class="mt-2 mx-4 w-2/5 py-1 px-2 border-gray-300 border text-sm rounded-md text-left flex justify-between hover:shadow-md">
                                1 Year
                                <svg class="-mr-1 ml-2 h-5 w-5 fill-gray-500">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            {showDropdown1 && (<div class="absolute top-24 bg-white mx-4 py-1 w-2/5 border border-gray-900 rounded-lg shadow-md text-xs">
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">Previous Month</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">Current Month</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">2 Months</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">3 Months</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">6 Months</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">1 Year</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">Current Year</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">Previous Year</a>
                            </div>)}

                            <div class="my-4 text-center text-sm flex justify-center">
                                <div class="w-3 h-3 bg-blue-500 rounded-full mx-2 mt-1"></div><p>Total Income: <span class="text-blue-500 font-semibold">{totalIncome}</span></p>
                            </div>
                            <div class="flex justify-center mb-3">
                                {
                                    show === false ?
                                        <img class="w-24 h-24 opacity-50" src='/img/empty_donut_chart.png' alt='' /> : <div class="my-auto sm:w-3/4 lg:w-1/2"><Doughnut data={data} options={chartOptions} /></div>
                                }


                            </div>

                            <div class="text-center">
                                {show === false ? <div><p class="block my-2 text-gray-500 text-xs">
                                    No information available.
                                </p>
                                    <p class="block my-2 text-gray-500 text-xs">
                                        Please create invoices to see your source of income.
                                    </p></div> : <div></div>}

                            </div>
                            {show === false ? <div class="mx-auto mb-4">
                                <p
                                    class="flex justify-center rounded-md text-sm text-blue-500 border-1 border-blue-500 py-1 px-3 hover:cursor-pointer"
                                    href=""
                                >Create your invoice</p>
                            </div> : <div></div>}

                        </div>

                        {/* 2 */}
                        <div class="card py-2 rounded-md shadow-md pb-4">
                            <a
                                class="no-underline py-2 px-4 border-gray-300 border-b text-blue-500 text-lg font-semibold"
                                href=""
                            >Collection Summary<div class="inline-block px-2"><i class='bx bxs-info-circle'></i></div></a
                            >

                            <button onClick={handleClick2} class="mt-2 mx-4 w-2/5 py-1 px-2 border-gray-300 border text-sm rounded-md text-left flex justify-between hover:shadow-md">
                                1 Year
                                <svg class="-mr-1 ml-2 h-5 w-5 fill-gray-500">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            {showDropdown2 && (<div class="absolute top-24 bg-white mx-4 py-1 w-2/5 border border-gray-900 rounded-lg shadow-md text-xs">
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">Previous Month</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">Current Month</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">2 Months</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">3 Months</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">6 Months</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">1 Year</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">Current Year</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">Previous Year</a>
                            </div>)}


                            <div class="my-auto mx-auto">
                                <div class="my-4 text-center text-sm flex justify-center">
                                    <div class="w-3 h-3 bg-blue-500 rounded-full mx-2 mt-1"></div>
                                    <span>Collected: <span class="text-blue-500 font-semibold">0.00</span></span>
                                    <div class="w-3 h-3 bg-gray-500 rounded-full ml-5 mt-1"></div>
                                    <span class="ml-2">Total: <span class="font-semibold">0.00</span></span>
                                </div>
                                <div class="flex justify-center my-3">
                                    <img class="w-24 h-24 opacity-50" src='/img/empty_bar_chart.png' alt='' />
                                </div>
                                <div class="text-center">
                                    <p class="block my-2 text-gray-500 text-xs">
                                        No information available.
                                    </p>
                                    <p class="block my-2 text-gray-500 text-xs">
                                        Please create invoices to see your source of income.
                                    </p>
                                </div>
                                <div class="sm:mx-24 mb-4">
                                    <p
                                        class="flex justify-center rounded-md text-sm text-blue-500 border-1 border-blue-500 py-1 px-3 hover:cursor-pointer"
                                        href=""
                                    >Create your invoice</p>
                                </div>
                            </div>

                        </div>



                    </div>
                </div>
                {/* Dashboard 1,2 copy */}



                {/* Dashboard 3,4 */}
                <div class="ml-12 mb-8 px-10 ">
                    <div
                        class="grid sm:grid-cols-1 lg:grid-cols-2 gap-4"
                    >

                        {/* 3 */}
                        <div class="card py-2 rounded-md shadow-md pb-4">
                            <a
                                class="no-underline py-2 px-4 border-gray-300 border-b text-blue-500 text-lg font-semibold"
                                href=""
                            >Expense by Category<div class="inline-block px-2"><i class='bx bxs-info-circle'></i></div></a
                            >

                            <button onClick={handleClick3} class="mt-2 mx-4 w-2/5 py-1 px-2 border-gray-300 border text-sm rounded-md text-left flex justify-between hover:shadow-md">
                                1 Year
                                <svg class="-mr-1 ml-2 h-5 w-5 fill-gray-500">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            {showDropdown3 && (<div class="absolute top-24 bg-white mx-4 py-1 w-2/5 border border-gray-900 rounded-lg shadow-md text-xs">
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">Previous Month</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">Current Month</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">2 Months</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">3 Months</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">6 Months</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">1 Year</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">Current Year</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">Previous Year</a>
                            </div>)}

                            <div class="my-4 text-center text-sm flex justify-center">
                                <div class="w-3 h-3 bg-red-500 rounded-full mx-2 mt-1"></div><p>Total Expense: <span class="text-red-500 font-semibold">0.00</span></p>
                            </div>
                            <div class="flex justify-center mb-3">
                                <img class="w-24 h-24 opacity-50" src='/img/empty_donut_chart.png' alt='' />
                            </div>
                            <div class="text-center">
                                <p class="block my-2 text-gray-500 text-xs">
                                    No information available.
                                </p>
                                <p class="block my-2 text-gray-500 text-xs">
                                    Please create invoices to see your source of income.
                                </p>
                            </div>
                            <div class="mx-auto mb-4">
                                <p
                                    class="flex justify-center rounded-md text-sm text-blue-500 border-1 border-blue-500 py-1 px-3 hover:cursor-pointer"
                                    href=""
                                >Create your invoice</p>
                            </div>
                        </div>

                        {/* 4 */}
                        <div class="card py-2 rounded-md shadow-md pb-4">
                            <a
                                class="no-underline py-2 px-4 border-gray-300 border-b text-blue-500 text-lg font-semibold"
                                href=""
                            >Payment Summary<div class="inline-block px-2"><i class='bx bxs-info-circle'></i></div></a
                            >

                            <button onClick={handleClick4} class="mt-2 mx-4 w-2/5 py-1 px-2 border-gray-300 border text-sm rounded-md text-left flex justify-between hover:shadow-md">
                                1 Year
                                <svg class="-mr-1 ml-2 h-5 w-5 fill-gray-500">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            {showDropdown4 && (<div class="absolute top-24 bg-white mx-4 py-1 w-2/5 border border-gray-900 rounded-lg shadow-md text-xs">
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">Previous Month</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">Current Month</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">2 Months</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">3 Months</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">6 Months</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">1 Year</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">Current Year</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">Previous Year</a>
                            </div>)}

                            <div class="my-4 text-center text-sm flex justify-center">
                                <div class="w-3 h-3 bg-red-500 rounded-full mx-2 mt-1"></div>
                                <span>Paid: <span class="text-red-500 font-semibold">0.00</span></span>
                                <div class="w-3 h-3 bg-gray-500 rounded-full ml-5 mt-1"></div>
                                <span class="ml-2">Total: <span class="font-semibold">0.00</span></span>
                            </div>
                            <div class="flex justify-center my-3">
                                <img class="w-24 h-24 opacity-50" src='/img/empty_bar_chart.png' alt='' />
                            </div>
                            <div class="text-center">
                                <p class="block my-2 text-gray-500 text-xs">
                                    No information available.
                                </p>
                                <p class="block my-2 text-gray-500 text-xs">
                                    Please create invoices to see your source of income.
                                </p>
                            </div>
                            <div class="mx-auto mb-4">
                                <p
                                    class="flex justify-center rounded-md text-sm text-blue-500 border-1 border-blue-500 py-1 px-3 hover:cursor-pointer"
                                    href=""
                                >Create your invoice</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Dashboard 3,4 */}


                {/* Dashboard 5 */}
                <div class="ml-12 mb-8 px-10 ">


                    {/* 5 */}
                    <div class="card rounded-md shadow-md pb-4">
                        <div class="py-3 px-4 flex justify-between border-gray-300 border-b align-middle">
                            <a
                                class="no-underline  text-blue-500 text-lg font-semibold"
                                href=""
                            >Summary by Accrual Basis<div class="inline-block px-2"><i class='bx bxs-info-circle'></i></div></a>
                            <div class=""><a href='#' class='pt-1 px-3 text-sm text-blue-500 no-underline hover:underline'>See Total Income and Total Expense by Project</a><button class="bg-orange-400 px-3 text-white text-sm rounded">New!</button></div>
                        </div>

                        <button onClick={handleClick5} class="mt-3 mx-4 w-2/5 py-1 px-2 border-gray-300 border text-sm rounded-md text-left flex justify-between hover:shadow-md">
                            1 Year
                            <svg class="-mr-1 ml-2 h-5 w-5 fill-gray-500">
                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        {showDropdown5 && (<div class="absolute top-28 bg-white mx-4 py-1 w-2/5 border border-gray-900 rounded-lg shadow-md text-xs">
                            <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">Previous Month</a>
                            <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">Current Month</a>
                            <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">2 Months</a>
                            <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">3 Months</a>
                            <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">6 Months</a>
                            <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">1 Year</a>
                            <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">Current Year</a>
                            <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">Previous Year</a>
                        </div>)}

                        <div class="my-4 text-center text-sm flex justify-center">
                            <div class="w-3 h-3 bg-blue-500 rounded-full mx-2 mt-1"></div>
                            <span>Total Income: <span class="text-blue-500 font-semibold">0.00</span></span>
                            <div class="w-3 h-3 bg-red-500 rounded-full ml-5 mt-1"></div>
                            <span class="ml-2">Total Expense: <span class="font-semibold text-red-500">0.00</span></span>
                        </div>
                        <div class="flex justify-center my-3">
                            <img class="w-24 h-24 opacity-50" src='/img/empty_line_chart.png' alt='' />
                        </div>
                        <div class="text-center">
                            <p class="block my-2 text-gray-500 text-xs">
                                No information available.
                            </p>
                            <p class="block my-2 text-gray-500 text-xs">
                                Please create invoices to see your source of income.
                            </p>
                        </div>
                        <div class="mx-auto mb-4">
                            <p
                                class="flex justify-center rounded-md text-sm text-blue-500 border-1 border-blue-500 py-1 px-3 hover:cursor-pointer"
                                href=""
                            >Create your invoice</p>
                        </div>
                    </div>

                </div>
                {/* Dashboard 5 */}

                {/* Dashboard 6,7 */}
                <div class="ml-12 mb-8 px-10">
                    <div
                        class="grid sm:grid-cols-1 lg:grid-cols-2 gap-4"
                    >
                        {/* 6 */}
                        <div class="card py-2 rounded-md shadow-md pb-4">
                            <a
                                class="py-2 px-4 border-gray-300 border-b text-blue-500 text-lg font-semibold no-underline"
                                href=""
                            >Outstanding Receivables<div class="inline-block px-2"><i class='bx bxs-info-circle'></i></div></a
                            >

                            <button onClick={handleClick6} class="mt-2 mx-4 w-2/5 py-1 px-2 border-gray-300 border text-sm rounded-md text-left flex justify-between hover:shadow-md">
                                1 Year
                                <svg class="-mr-1 ml-2 h-5 w-5 fill-gray-500">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            {showDropdown6 && (<div class="absolute top-24 bg-white mx-4 py-1 w-2/5 border border-gray-900 rounded-lg shadow-md text-xs">
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">Previous Month</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">Current Month</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">2 Months</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">3 Months</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">6 Months</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">1 Year</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">Current Year</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">Previous Year</a>
                            </div>)}

                            <div class="mx-3 mt-3 text-sm flex">
                                <div class="w-3 h-3 bg-blue-500 rounded-full mx-2 mt-1"></div>
                                <p>Unpaid Amount: <span class="text-blue-500 font-semibold">0.00</span></p>
                            </div>
                            <div class="flex justify-between text-sm bg-blue-100 mb-5 text-gray-600">
                                <div class="py-1 px-4">Document</div>
                                <div class="py-1 px-20">Status</div>
                            </div>
                            <div class="flex justify-center mb-3">
                                <img class="w-24 h-24 opacity-50" src='/img/empty_chart.png' alt='' />
                            </div>
                            <div class="text-center">
                                <p class="block my-2 text-gray-500 text-xs">
                                    No information available.
                                </p>
                                <p class="block my-2 text-gray-500 text-xs">
                                    Please create invoices to see your source of income.
                                </p>
                            </div>
                            <div class="mx-auto mb-4">
                                <p
                                    class="flex justify-center rounded-md text-sm text-blue-500 border-1 border-blue-500 py-1 px-3 hover:cursor-pointer"
                                    href=""
                                >Create your invoice</p>
                            </div>
                        </div>

                        {/* 7 */}
                        <div class="card py-2 rounded-md shadow-md pb-4">
                            <a
                                class="py-2 px-4 border-gray-300 border-b text-blue-500 text-lg font-semibold no-underline"
                                href=""
                            >Outstanding Payables<div class="inline-block px-2"><i class='bx bxs-info-circle'></i></div></a
                            >

                            <button onClick={handleClick7} class="mt-2 mx-4 w-2/5 py-1 px-2 border-gray-300 border text-sm rounded-md text-left flex justify-between hover:shadow-md">
                                1 Year
                                <svg class="-mr-1 ml-2 h-5 w-5 fill-gray-500">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            {showDropdown7 && (<div class="absolute top-24 bg-white mx-4 py-1 w-2/5 border border-gray-900 rounded-lg shadow-md text-xs">
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">Previous Month</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">Current Month</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">2 Months</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">3 Months</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">6 Months</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">1 Year</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">Current Year</a>
                                <a href="" class="block px-3 py-2 text-gray-800 hover:bg-blue-100 no-underline">Previous Year</a>
                            </div>)}

                            <div class="mx-3 mt-3 text-sm flex">
                                <div class="w-3 h-3 bg-red-500 rounded-full mx-2 mt-1"></div>
                                <p>Unpaid Amount: <span class="text-red-500 font-semibold">0.00</span></p>
                            </div>
                            <div class="flex justify-between text-sm bg-red-100 mb-5 text-gray-600">
                                <div class="py-1 px-4">Document</div>
                                <div class="py-1 px-20">Status</div>
                            </div>
                            <div class="flex justify-center mb-3">
                                <img class="w-24 h-24 opacity-50" src='/img/empty_chart.png' alt='' />
                            </div>
                            <div class="text-center">
                                <p class="block my-2 text-gray-500 text-xs">
                                    No information available.
                                </p>
                                <p class="block my-2 text-gray-500 text-xs">
                                    Please create invoices to see your source of income.
                                </p>
                            </div>
                            <div class="mx-auto mb-4">
                                <p
                                    class="flex justify-center rounded-md text-sm text-blue-500 border-1 border-blue-500 py-1 px-3 hover:cursor-pointer"
                                    href=""
                                >Create your invoice</p>
                            </div>
                        </div>
                    </div>
                    {/* </div> */}
                </div>
                {/* Dashboard 6,7 */}

            </div>
        </div>
    </>
    )
}

