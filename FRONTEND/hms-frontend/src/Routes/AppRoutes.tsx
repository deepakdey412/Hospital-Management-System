import React from 'react'
import Header from '../Components/Header/Header'
import SideBar from '../Components/Sidebar/SideBar'

const AppRoutes = () => {
  return (
    <div className='flex w-full'>
        <SideBar></SideBar>
        <Header></Header>
    </div>
  )
}

export default AppRoutes