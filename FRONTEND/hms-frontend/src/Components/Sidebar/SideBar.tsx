import React from 'react';
import { Avatar, Text } from '@mantine/core';
import { IconCalendarWeekFilled, IconHeartbeat, IconLayoutGrid, IconMoodWrrrFilled, IconStethoscope, IconVaccine } from '@tabler/icons-react';
import { link } from 'fs';
import { NavLink } from 'react-router-dom';


const links = [
  
  { name:"Dashboard" , url : "/dashboard" , icon:<IconLayoutGrid stroke={1.5} /> },
  { name:"Doctor" , url : "/doctor" , icon:<IconStethoscope stroke={1.5} /> },
  { name:"Patient" , url : "/patient" , icon:<IconMoodWrrrFilled stroke={1.5} /> },
  { name:"Appointment" , url : "/appointment" , icon:<IconCalendarWeekFilled stroke={1.5} /> },
  { name:"Appointment" , url : "/appointment" , icon:<IconVaccine stroke={1.5} /> },

]
const SideBar = () => {
  return (
    <div className="w-64 bg-red-200 flex flex-col gap-7 items-center pt-3">
      
      {/* Header */}
      <div className="text-red-500 flex gap-1 items-center">
        <IconHeartbeat size={40} stroke={2.5} />
        <span className="font-heading font-semibold text-3xl">Pulse</span>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col gap-1 items-center">
        <div className="p-1 bg-white rounded-full shadow-lg">
          <Avatar variant="filled" src="avatar.png" size="xl" alt="it's me" />
        </div>
        <span className="font-semibold ">Deepak</span>
        <Text size="sm" color="dimmed">
          Domain Admin
        </Text>
      </div>
      <div className='flex-col gap-1 '>
        {
          links.map({
            (link)=>{
              return <NavLink to={link.url} key={link.url}></NavLink>
            }
          })
        }

      </div>

    </div>
  );
};

export default SideBar;
