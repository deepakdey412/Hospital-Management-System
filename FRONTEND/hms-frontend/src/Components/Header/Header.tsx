import { ActionIcon } from "@mantine/core";
import { IconBellRinging, IconLayoutSidebarLeftCollapse } from "@tabler/icons-react";
import React from "react";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  return (
    <div className="w-full h-16 bg-blue-300 flex justify-between px-5 items-center">
      <ActionIcon color="dark" size="xl" variant="transparent">
        <IconLayoutSidebarLeftCollapse size={34} />
      </ActionIcon>
      <div className="flex gap-8 items-center mr-5">
      <ActionIcon color="dark" size="lg" variant="transparent">
        <IconBellRinging size={34} />
      </ActionIcon>
      <ProfileMenu></ProfileMenu>
      </div>
    </div>
  );
};

export default Header;
