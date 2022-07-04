import React, { useState } from 'react'
import '../Component/Dashboard.css'
import 'boxicons'

export default function Dashboard() {

    return (<>
        <div class='flex'>
            <div class="sidebar">
                <ul class="nav-links">
                    <li>
                        <a href="#">
                            <img src="/img/icon_Flow.png" alt="" />
                        </a>
                    </li>
                    <li>
                        <a href="#" class="active">
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
                    <li>
                        <a href="#">
                            <i class='bx bx-user-circle'></i>
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
                        <a href='' class="text-sm text-gray-500 hover:border-b border-gray-500 hover:text-gray-500" style={{ textDecoration: "none" }}>TH</a>
                        <a href='' class="text-sm bg-gray-200 text-black rounded px-5" style={{ textAlign: "left", textDecoration: "none" }}>BW110</a>
                        <span class="text-xs"><strong>Customer ID:</strong> N830682</span>
                    </div>
                </div>



                {/* slider section */}
                <div class="text-blue-500 text-2xl ml-12 mt-8 px-10">Recent Updates</div>
                <div
                    class="ml-12 grid px-10 py-2 grid-cols-4 gap-3"
                >
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
                </div>
                {/* slider section */}

                {/* Take a Tour */}
                <div class="ml-12 mb-8 px-10 ">
                    <div class="rounded-md shadow-md p-6">
                        <div class="pb-4 text-center text-2xl">Take a Tour of Flow Account With These Easy Steps</div>
                        <div class="grid grid-cols-5">

                            <div class="px-8 text-center">
                                <p>Get your Free Demo!</p>
                                <div class="flex justify-center rounded-full shadow-md p-1"><img class="w-28 h-28" src="/img/account.png" alt="" /></div>

                                <span class="inline-block pt-3 text-sm">
                                    Contact Our Team
                                </span>
                                <span class="block my-2 text-gray-500 text-xs">
                                    To schedule a free demo via video call
                                </span>
                                <span class="block my-2 text-blue-500 hover:cursor-pointer">📞 02-026-8991</span>

                                <p
                                    class="flex justify-center rounded-md bg-blue-500 text-sm text-white py-1 hover:cursor-pointer"
                                    href=""
                                >Request for demo</p>
                            </div>

                            <div class="text-center px-4">
                                <div class="flex justify-center mb-4"><img src="/img/start_1.png" alt="" /></div>
                                <div class="flex justify-center"><div class="w-12 h-12 rounded-full border"></div></div>
                                <span class="inline-block pt-3 text-sm">
                                    How to create quotation
                                </span>
                                <span class="block my-2 text-gray-500 text-xs">
                                    Create and quote your client in a snap.
                                </span>
                                <p
                                    class="flex justify-center rounded-md bg-green-500 text-sm text-white py-1 hover:cursor-pointer"
                                    href=""
                                >Take the tour</p>
                            </div>

                            <div class="text-center px-4">
                                <div class="flex justify-center mb-4"><img src="/img/start_2.png" alt="" /></div>
                                <div class="flex justify-center"><div class="w-12 h-12 rounded-full border"></div></div>
                                <span class="inline-block pt-3 text-sm">
                                    How to issue invoices
                                </span>
                                <span class="block my-2 text-gray-500 text-xs">
                                    Track document status and see who owes you.
                                </span>
                                <p
                                    class="flex justify-center rounded-md bg-green-500 text-sm text-white py-1 hover:cursor-pointer"
                                    href=""
                                >Take the tour</p>
                            </div>

                            <div class="text-center px-4">
                                <div class="flex justify-center mb-4"><img src="/img/start_3.png" alt="" /></div>
                                <div class="flex justify-center"><div class="w-12 h-12 rounded-full border"></div></div>
                                <span class="inline-block pt-3 text-sm">
                                    Add Business Details
                                </span>
                                <span class="block my-2 text-gray-500 text-xs">
                                    Prepare business details to start invoicing right away.
                                </span>
                                <p
                                    class="flex justify-center rounded-md bg-green-500 text-sm text-white py-1 hover:cursor-pointer"
                                    href=""
                                >Start</p>
                            </div>

                            <div class="text-center px-4">
                                <div class="flex justify-center mb-4"><img src="/img/start_4.png" alt="" /></div>
                                <div class="flex justify-center"><div class="w-12 h-12 rounded-full border"></div></div>
                                <span class="inline-block pt-3 text-sm">
                                    How to add users
                                </span>
                                <span class="block my-2 text-gray-500 text-xs">
                                    Manage users permission such as accountant or sales.
                                </span>
                                <p
                                    class="flex justify-center rounded-md bg-green-500 text-sm text-white py-1 hover:cursor-pointer"
                                    href=""
                                >Take the tour</p>
                            </div>

                        </div>
                    </div>
                </div>
                {/* Take a Tour */}

                {/* Dashboard 1,2 */}
                <div class="ml-12 mb-8 px-10 ">
                    <div class="flex space-x-5">

                        {/* 1 */}
                        <div class="card w-1/3 lg:w-1/2 py-2 rounded-md shadow-md pb-4">
                            <a style={{ textDecoration: "none" }}
                                class="py-2 px-4 border-gray-300 border-b text-blue-500 text-lg font-semibold"
                                href=""
                            >Sales by Product</a
                            >
                            <div class="mt-2 mx-4 w-2/5 py-1 px-2 border-gray-300 border text-sm rounded-md hover:cursor-pointer">1 Year</div>
                            <div class="my-4 text-center text-sm">
                                <p>Total Income: <span class="text-blue-500 font-semibold">0.00</span></p>
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

                        {/* 2 */}
                        <div class="card w-2/3 lg:w-1/2 py-2 rounded-md shadow-md pb-4">
                            <a style={{ textDecoration: "none" }}
                                class="py-2 px-4 border-gray-300 border-b text-blue-500 text-lg font-semibold"
                                href=""
                            >Collection Summary</a
                            >
                            <div class="mt-2 mx-4 w-2/5 py-1 px-2 border-gray-300 border text-sm rounded-md hover:cursor-pointer">1 Year</div>
                            <div class="my-4 text-center text-sm">
                                <span>Collected: <span class="text-blue-500 font-semibold">0.00</span></span>
                                <span class="ml-4">Total: <span class="font-semibold">0.00</span></span>
                            </div>
                            <div class="flex justify-center mb-3">
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
                {/* Dashboard 1,2 */}

                {/* Dashboard 3,4 */}
                <div class="ml-12 mb-8 px-10 ">
                    <div class="flex space-x-5">

                        {/* 3 */}
                        <div class="card w-1/3 lg:w-1/2 py-2 rounded-md shadow-md pb-4">
                            <a style={{ textDecoration: "none" }}
                                class="py-2 px-4 border-gray-300 border-b text-blue-500 text-lg font-semibold"
                                href=""
                            >Expense by Category</a
                            >
                            <div class="mt-2 mx-4 w-2/5 py-1 px-2 border-gray-300 border text-sm rounded-md hover:cursor-pointer">1 Year</div>
                            <div class="my-4 text-center text-sm">
                                <p>Total Expense: <span class="text-red-500 font-semibold">0.00</span></p>
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
                        <div class="card w-2/3 lg:w-1/2 py-2 rounded-md shadow-md pb-4">
                            <a style={{ textDecoration: "none" }}
                                class="py-2 px-4 border-gray-300 border-b text-blue-500 text-lg font-semibold"
                                href=""
                            >Payment Summary</a
                            >
                            <div class="mt-2 mx-4 w-2/5 py-1 px-2 border-gray-300 border text-sm rounded-md hover:cursor-pointer">1 Year</div>
                            <div class="my-4 text-center text-sm">
                                <span>Paid: <span class="text-red-500 font-semibold">0.00</span></span>
                                <span class="ml-4">Total: <span class="font-semibold">0.00</span></span>
                            </div>
                            <div class="flex justify-center mb-3">
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
                    <div class="flex space-x-5">

                        {/* 5 */}
                        <div class="card w-full rounded-md shadow-md pb-4">
                            <div class="py-3 px-4 flex justify-between border-gray-300 border-b align-middle">
                                <a style={{ textDecoration: "none" }}
                                    class=" text-blue-500 text-lg font-semibold"
                                    href=""
                                >Summary by Accrual Basis</a>
                                <div class=""><a href='#' class='pt-1 px-3 text-sm text-blue-500 no-underline hover:underline'>See Total Income and Total Expense by Project</a><button class="bg-orange-400 px-3 text-white text-sm rounded">New!</button></div>
                            </div>

                            <div class="mt-2 mx-4 w-1/5 py-1 px-2 border-gray-300 border text-sm rounded-md hover:cursor-pointer">1 Year</div>
                            <div class="my-4 text-center text-sm">
                                <span>Total Income: <span class="text-blue-500 font-semibold">0.00</span></span>
                                <span class="ml-4">Total Expense: <span class="text-red-500 font-semibold">0.00</span></span>
                            </div>
                            <div class="flex justify-center mb-3">
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
                </div>
                {/* Dashboard 5 */}

                {/* Dashboard 6,7 */}
                <div class="ml-12 mb-8 px-10 ">
                    <div class="flex space-x-5">

                        {/* 6 */}
                        <div class="card w-1/3 lg:w-1/2 py-2 rounded-md shadow-md pb-4">
                            <a
                                class="py-2 px-4 border-gray-300 border-b text-blue-500 text-lg font-semibold no-underline"
                                href=""
                            >Outstanding Receivables</a
                            >
                            <div class="mt-2 mx-4 w-2/5 py-1 px-2 border-gray-300 border text-sm rounded-md hover:cursor-pointer">1 Year</div>
                            <div class="my-4 text-center text-sm">
                                <p>Total Income: <span class="text-blue-500 font-semibold">0.00</span></p>
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
                        <div class="card w-2/3 lg:w-1/2 py-2 rounded-md shadow-md pb-4">
                            <a
                                class="py-2 px-4 border-gray-300 border-b text-blue-500 text-lg font-semibold no-underline"
                                href=""
                            >Outstanding Payables</a
                            >
                            <div class="mt-2 mx-4 w-2/5 py-1 px-2 border-gray-300 border text-sm rounded-md hover:cursor-pointer">1 Year</div>
                            <div class="my-4 text-center text-sm">
                                <span>Collected: <span class="text-blue-500 font-semibold">0.00</span></span>
                                <span class="ml-4">Total: <span class="font-semibold">0.00</span></span>
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
                </div>
                {/* Dashboard 6,7 */}

            </div>
        </div>
    </>
    )
}

