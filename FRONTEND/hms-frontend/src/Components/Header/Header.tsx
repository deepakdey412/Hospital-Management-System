import { ActionIcon } from '@mantine/core'
import {  IconLayoutSidebarLeftCollapse } from '@tabler/icons-react'
import React from 'react'
import ProfileMenu from './ProfileMenu'

const Header = () => {
  return (
    <div  className='w-full h-16 bg-blue-300 flex justify-between px-5 items-center'>
       <ActionIcon color="dark" size="xl" variant="transparent">
      <IconLayoutSidebarLeftCollapse size={34}/>
    </ActionIcon>
    <ProfileMenu></ProfileMenu>
    </div>
  )
}

export default Header