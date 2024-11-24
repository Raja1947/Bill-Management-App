import React, { useState } from 'react'
import { SideBarData } from './SidebarData'


function Sidebar() {
    const [isOpen, setIsOpen]= useState(true)
    const toggleSideBar=()=>{
        setIsOpen(!isOpen)
    }
  return (
   <div className={`sidebar vh-100 text-white position-fixed top-0 start-0 ${isOpen?'open':'closed'}`}>
    <div className='sidebar-header d-flex align-items-center justify-content-between'>
        <button className='toggle-btn d-flex align-items-center  ' onClick={toggleSideBar}>
            <div className={`arrow ${isOpen?'left':'right' }`}></div>

        </button>
        <div className='heading text-center'>
        <h5 className='m-0'>{isOpen?"Bill Management System":''}</h5>
        </div>
    </div>
    <nav className='nav-menu'>
        <ul>
            {SideBarData?.map((item,index)=>(
                <li key={index}>
                    <a href='item.path'>
                        
                        {isOpen?item.title:''}
                    </a>

                </li>
            ))}
        </ul>
    </nav>
   </div>
  )
}

export default Sidebar
