import React from 'react';
import { Avatar, Text } from '@mantine/core';
import {
  IconCalendarWeekFilled,
  IconHeartbeat,
  IconLayoutGrid,
  IconMoodWrrrFilled,
  IconStethoscope,
  IconVaccine
} from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

const links = [
  { name: "Dashboard", url: "/dashboard", icon: <IconLayoutGrid stroke={1.5} /> },
  { name: "Doctor", url: "/doctor", icon: <IconStethoscope stroke={1.5} /> },
  { name: "Patient", url: "/patient", icon: <IconMoodWrrrFilled stroke={1.5} /> },
  { name: "Appointment", url: "/appointment", icon: <IconCalendarWeekFilled stroke={1.5} /> },
  { name: "Vaccine", url: "/vaccine", icon: <IconVaccine stroke={1.5} /> },
];

const SideBar = () => {
  return (
    <div className="bg-red-200 w-64 h-screen bg-pink shadow-lg flex flex-col items-center py-6 gap-8">

      {/* Brand / Logo */}
      <div className="text-red-600 flex gap-2 items-center">
        <IconHeartbeat size={42} stroke={2.2} />
        <span className="font-heading font-bold text-3xl tracking-wide">Pulse</span>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col gap-1 items-center">
        <div className="p-1 bg-gray-100 rounded-full shadow-md">
          <Avatar variant="filled" src="avatar.png" size="xl" alt="it's me" />
        </div>
        <span className="font-semibold text-lg">Deepak</span>
        <Text size="sm" color="dimmed">Domain Admin</Text>
      </div>

      {/* Sidebar Links */}
      <div className="flex flex-col gap-2 h-screen">
        {links.map((link) => (
          <NavLink
            to={link.url}
            key={link.url}
            className={({ isActive }) =>
              `flex items-center gap-5 w-full text-lg font-semibold px-4 py-6 rounded-lg transition-colors duration-200 
              ${isActive ? "bg-black text-dark" : "text-black hover:bg-gray-600 hover:text-white"}`
            }
          >
            {/* ✅ Render the icon before the text */}
            <span className="text-2xl">{link.icon}</span>
            <span>{link.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
