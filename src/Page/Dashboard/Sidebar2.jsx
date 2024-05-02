import React, { useState } from 'react'
import { BiRadioCircle, BiRadioCircleMarked } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { SidebarItemsdata } from '../../data/data1'
import { list } from 'postcss'

const Sidebar2 = () => {
    const [isChecked, setIsChecked] = useState(false)
    const [active, setActive] = useState(false)
    const [mouseEnter, setMouseEnter] = useState(false)



    
  return (
    <aside 
    onMouseEnter={()=>setMouseEnter(curr=>!curr)}
    onMouseLeave={()=>setMouseEnter(curr=>!curr)}
    className='h-screen '>
    <nav className="h-full flex  flex-col bg-white border-r shadow-sm">
        <div className="p-4 h-12 pb-2 flex justify-between items-center gap-3">
            <img src="https://img.logoipsum.com/243.svg" alt="" 
            className={`transition-all ${isChecked || mouseEnter ? "w-32" : "w-0 "} `} />
            <button onClick={()=>setIsChecked(!isChecked)} className="  hover:bg-gray-100">
            {isChecked ? <BiRadioCircleMarked className='w-6 h-6' /> : <BiRadioCircle className='w-6 h-6' />}
            </button>
        </div>
        <ul className="flex-1 px-3">
            {SidebarItemsdata && SidebarItemsdata.map(item=>
            <li key={item.text} className={`group relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors
            ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" :
            "hover:bg-indigo-50 text-gray-600"} `}>
            <span className='text-lg'>{React.createElement(item.icon)}</span>            
            <span
            className={`overflow-hidden transition-all ${isChecked || mouseEnter ? "w-52 ml-3" : "w-0 "}`}
            >{item.text}</span>
            {!isChecked &&  
            <div className={`${mouseEnter && "invisible"} absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 `}>{item.text}</div>
            }
            </li>)}
        </ul>
        <div className="border-t flex p-3">
            <img src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true" alt="" 
            className='w-10 h-10 rounded-md'
            />
            <div className={`flex justify-between overflow-hidden transition-all items-center ${isChecked || mouseEnter ? "w-52 ml-3" : "w-0"}`}>
            <div className="leading-4">
            <h4 className="font-semibold">John Doe</h4>
            <span className="text-xs text-gray-600">bayzid@gmail.com</span>
            </div>
            <BsThreeDotsVertical  className='text-xl'/>
            </div>
        </div>
    </nav>
    </aside>
  )
}

export default Sidebar2