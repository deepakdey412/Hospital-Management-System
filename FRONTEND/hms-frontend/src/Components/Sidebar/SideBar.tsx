import React from "react";
import { Avatar, Text } from "@mantine/core";
import {
  IconCalendarWeekFilled,
  IconHeartbeat,
  IconLayoutGrid,
  IconMoodWrrrFilled,
  IconStethoscope,
  IconVaccine,
} from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Dashboard",
    url: "/",
    icon: <IconLayoutGrid stroke={1.5} />,
  },
  { name: "Doctor", url: "/doctor", icon: <IconStethoscope stroke={1.5} /> },
  {
    name: "Patient",
    url: "/patient",
    icon: <IconMoodWrrrFilled stroke={1.5} />,
  },
  {
    name: "Appointment",
    url: "/appointment",
    icon: <IconCalendarWeekFilled stroke={1.5} />,
  },
  { name: "Vaccine", url: "/vaccine", icon: <IconVaccine stroke={1.5} /> },
];

const SideBar = () => {
  return (
    <div className="bg-red-200 w-64 overflow-y-auto bg-pink shadow-lg flex flex-col items-center gap-8 h-screen hide-scrollbar">
      {/* Brand / Logo */}
      <div className="fixed top-0 left-0 z-[500] w-56 bg-gray-900 py-4 flex items-center justify-center gap-3 shadow-md rounded-r-lg">
        <IconHeartbeat size={44} stroke={2.5} className="text-red-500" />
        <span className="font-heading font-extrabold text-3xl tracking-wide text-red-500">
          Pulse
        </span>
      </div>

      <div className="flex flex-col gap-5 mt-20">
        {/* Profile Section */}
        <div className="flex flex-col gap-1 items-center">
          <div className="p-1 bg-gray-100 rounded-full shadow-md">
            <Avatar variant="filled" src="avatar.png" size="xl" alt="it's me" />
          </div>
          <span className="font-semibold text-lg">Deepak</span>
          <Text size="sm" color="dimmed">
            Domain Admin
          </Text>
        </div>

        <div className="flex flex-col gap-5 h-screen ">
          {links.map((link) => (
            <NavLink
              to={link.url}
              key={link.url}
              className={({ isActive }) =>
                `flex items-center gap-5 w-full font-medium text-lg px-6 py-6 rounded-lg transition-all duration-200
        ${
          isActive
            ? "bg-gray-800 text-white"
            : "text-black hover:bg-gray-700 hover:text-white"
        }`
              }
            >
              {link.icon}
              <span>{link.name}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
