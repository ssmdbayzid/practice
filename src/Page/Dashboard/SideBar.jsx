import React, { useContext, createContext, useState, } from 'react'

import { BiRadioCircle, BiRadioCircleMarked  } from "react-icons/bi";
// import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { SidebarItemsdata } from '../../data/data1';

const SideBarContext = createContext()


const SideBar = () => {
    const [checked, setChecked] = useState(false)
  return (
    <aside className={`h-screen ${checked ? "max-w-64" : "w-12"} transition-all overflow-hidden duration-300 `}>
        <nav className=" flex flex-col h-full bg-white border-r shadow-sm">
            <div className="bg-slate-500 p-4 pb-2 flex justify-between items-center">
            <img src="https://img.logoipsum.com/243.svg" className={`overflow-hidden transition-all ${checked ? "w-32" : "w-0"}`} alt="" />
            <button onClick={()=>setChecked(!checked)}>
            {checked ? <BiRadioCircleMarked className='w-8 h-8' /> : <BiRadioCircle className='w-8 h-8' />}
            </button>
            </div>  
            <SideBarContext.Provider value={{checked}}>
            {/* ------ Sidebar Item List ------ */}
            <ul className="flex-1 px-3 overflow-y-auto"> <SidebarItem /></ul>
            </SideBarContext.Provider>
    <div className="border-t flex p-3">
        <img src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true" alt="" className="w-10 h-10 rounded-md mr-3" />
        <div className={`flex justify-between items-center overflow-hidden transition-all ${checked ? "w-full " : "w-0"}`}>
            <div className="leading-4">
                <h4 className="font-semibold">John Doe</h4>
                <span className='text-xs  text-gray-600'>adminbayzid@gmail.com</span>
            </div>
            <BsThreeDotsVertical  className='text-xl'/>
        </div>
    
    </div>        
        </nav>
   
    </aside>
  )
}

export default SideBar

const SidebarItem = () =>{
    const {checked} = useContext(SideBarContext)
    
    const [active, setActive ] = useState(false)
    return (
        <>
        {SidebarItemsdata && SidebarItemsdata.map(item=> 
        <li key={item.text} className={`relative flex items-center 
        py-2 px-3 my-1 font-medium rounded-md
        cursor-pointer transition-colors
        ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" 
    : "hover:bg-indigo-50 text-gray-600"} group`}>
        
        <span className='text-xl mr-3'>{React.createElement(item?.icon)} </span>
        <span className={`overflow-hidden transition-all ${checked ? "w-52" : "w-0"} `}>{item?.text}</span>
        
        {!checked && (
            <div className={`absolute left-full rounded-md  px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>
            {item?.text}
            </div>
        )}
        </li>)}
        </>)
}