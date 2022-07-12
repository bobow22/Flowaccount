import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import '../Component/Dashboard_cash_invoice.css'
import { Table } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Dashboard_cash_invoice() {

    let navigate = useNavigate();

    const columns = [
        {
            title: 'DATE',
            dataIndex: 'date',
            key: 'date',
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
        },
        {
            title: 'STATUS',
            dataIndex: '',
            key: '',
        },
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
                    setData(res.data.result[0])
                })
                .catch((err) => {
                    console.error(err);
                }
                );
        };
        getData();
        console.log("User data:", getData());
    }, []);



    return (<>
        <div class="flex relative">
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



            <div class="ml-12 mb-8 px-10">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-white uppercase bg-blue-400 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="p-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-all" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-all" class="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" class="px-6 py-3 font-normal text-sm">
                                    Date
                                </th>
                                <th scope="col" class="px-6 py-3 font-normal text-sm">
                                    Document No.
                                </th>
                                <th scope="col" class="px-6 py-3 font-normal text-sm">
                                    Customer Name/ Project Name
                                </th>
                                <th scope="col" class="px-6 py-3 font-normal text-sm">
                                    Net Total
                                </th>
                                <th scope="col" class="px-6 py-3 font-normal text-sm">
                                    Status
                                </th>
                                <th>
                                    {/* empty */}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="w-4 p-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    01-07-2022
                                </td>
                                <td class="px-6 py-4">
                                    <i aria-hidden="true" class="fa fa-circle awaiting-color ng-star-inserted"></i>
                                    CA2022070003
                                </td>
                                <td class="px-6 py-4">
                                    a
                                </td>
                                <td class="px-6 py-4">
                                    2,033.0
                                </td>

                                <td>
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="inline-flex justify-center w-full rounded-md border  px-4 py-2 bg-zinc-100 text-sm font-small text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                                Pending
                                                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                            </Menu.Button>
                                        </div>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="py-1">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm'
                                                                )}
                                                            >
                                                                Finished
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm'
                                                                )}
                                                            >
                                                                Cancelled
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </td>
                                <td>
                                    <button class="bg-transparent hover:bg-blue-500 text-gray-700 font-semibold hover:text-blue-500 py-2 px-4 border border-blue-500 hover:border-transparent rounded pull-left">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pull-left" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="w-4 p-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    01-07-2022
                                </td>
                                <td class="px-6 py-4">
                                    <i aria-hidden="true" class="fa fa-circle awaiting-color ng-star-inserted"></i>
                                    CA2022070003
                                </td>
                                <td class="px-6 py-4">
                                    a
                                </td>
                                <td class="px-6 py-4">
                                    2,033.0
                                </td>

                                <td>
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="inline-flex justify-center w-full rounded-md border  px-4 py-2 bg-zinc-100 text-sm font-small text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                                Pending
                                                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                            </Menu.Button>
                                        </div>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="py-1">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm'
                                                                )}
                                                            >
                                                                Finished
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm'
                                                                )}
                                                            >
                                                                Cancelled
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </td>
                                <td>
                                    <button class="bg-transparent hover:bg-blue-500 text-gray-700 font-semibold hover:text-blue-500 py-2 px-4 border border-blue-500 hover:border-transparent rounded pull-left">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pull-left" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="w-4 p-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    01-07-2022
                                </td>
                                <td class="px-6 py-4">
                                    <i aria-hidden="true" class="fa fa-circle awaiting-color ng-star-inserted"></i>
                                    CA2022070003
                                </td>
                                <td class="px-6 py-4">
                                    a
                                </td>
                                <td class="px-6 py-4">
                                    2,033.0
                                </td>

                                <td>
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="inline-flex justify-center w-full rounded-md border  px-4 py-2 bg-zinc-100 text-sm font-small text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                                Pending
                                                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                            </Menu.Button>
                                        </div>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="py-1">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm'
                                                                )}
                                                            >
                                                                Finished
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm'
                                                                )}
                                                            >
                                                                Cancelled
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </td>
                                <td>
                                    <button class="bg-transparent hover:bg-blue-500 text-gray-700 font-semibold hover:text-blue-500 py-2 px-4 border border-blue-500 hover:border-transparent rounded pull-left">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pull-left" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="w-4 p-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    01-07-2022
                                </td>
                                <td class="px-6 py-4">
                                    <i aria-hidden="true" class="fa fa-circle awaiting-color ng-star-inserted"></i>
                                    CA2022070003
                                </td>
                                <td class="px-6 py-4">
                                    a
                                </td>
                                <td class="px-6 py-4">
                                    2,033.0
                                </td>

                                <td>
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="inline-flex justify-center w-full rounded-md border  px-4 py-2 bg-zinc-100 text-sm font-small text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                                Pending
                                                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                            </Menu.Button>
                                        </div>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="py-1">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm'
                                                                )}
                                                            >
                                                                Finished
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm'
                                                                )}
                                                            >
                                                                Cancelled
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </td>
                                <td>
                                    <button class="bg-transparent hover:bg-blue-500 text-gray-700 font-semibold hover:text-blue-500 py-2 px-4 border border-blue-500 hover:border-transparent rounded pull-left">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pull-left" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="w-4 p-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    01-07-2022
                                </td>
                                <td class="px-6 py-4">
                                    <i aria-hidden="true" class="fa fa-circle awaiting-color ng-star-inserted"></i>
                                    CA2022070003
                                </td>
                                <td class="px-6 py-4">
                                    a
                                </td>
                                <td class="px-6 py-4">
                                    2,033.0
                                </td>

                                <td>
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="inline-flex justify-center w-full rounded-md border  px-4 py-2 bg-zinc-100 text-sm font-small text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                                Pending
                                                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                            </Menu.Button>
                                        </div>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="py-1">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm'
                                                                )}
                                                            >
                                                                Finished
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm'
                                                                )}
                                                            >
                                                                Cancelled
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </td>
                                <td>
                                    <button class="bg-transparent hover:bg-blue-500 text-gray-700 font-semibold hover:text-blue-500 py-2 px-4 border border-blue-500 hover:border-transparent rounded pull-left">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pull-left" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="w-4 p-4">
                                    <div class="flex items-center">
                                        <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <td class="px-6 py-4">
                                    01-07-2022
                                </td>
                                <td class="px-6 py-4">
                                    <i aria-hidden="true" class="fa fa-circle awaiting-color ng-star-inserted"></i>
                                    CA2022070003
                                </td>
                                <td class="px-6 py-4">
                                    a
                                </td>
                                <td class="px-6 py-4">
                                    2,033.0
                                </td>

                                <td>
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="inline-flex justify-center w-full rounded-md border  px-4 py-2 bg-zinc-100 text-sm font-small text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                                Pending
                                                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                                            </Menu.Button>
                                        </div>

                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <div className="py-1">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm'
                                                                )}
                                                            >
                                                                Finished
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    'block px-4 py-2 text-sm'
                                                                )}
                                                            >
                                                                Cancelled
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                </div>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </td>
                                <td>
                                    <button class="bg-transparent hover:bg-blue-500 text-gray-700 font-semibold hover:text-blue-500 py-2 px-4 border border-blue-500 hover:border-transparent rounded pull-left">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 pull-left" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
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

        </div>
    </>
    )
}
