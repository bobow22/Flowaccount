import React,{useState} from 'react'
import '../Component/Dashboard.css'
import 'boxicons'

export default function Dashboard() {

    return (<>
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
                <li style={{borderBottom: '1px solid white'}}>
                    <a href="#">
                         <i class='bx bxs-chalkboard'></i>
                    </a>
                </li>
                <li style={{marginBottom: '1.5rem'}}>
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



        //---------------------------------------Dashboard-------------------------------------------//
        
        <div style={{fontSize: '100px', textAlign: 'center'}}> Dashboard </div>
        </>
    )
}

