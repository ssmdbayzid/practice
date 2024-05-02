import React from 'react'
import SideBar from './SideBar'
import Sidebar2 from './Sidebar2'


const Dashboard = () => {
  return (
    <div className='flex gap-20 justify-center'>      
      {/* <SideBar /> */}
      <div className="">
        <Sidebar2 />
      </div>
    </div>
  )
}

export default Dashboard