import { notifications } from '@mantine/notifications';
import {  IconCheck, IconX } from '@tabler/icons-react';

export const successNotification = (message: string) => {
  notifications.show({
    title: "🎉 Successfully Registered!",
    message: message,
    color: 'teal',
    icon: <IconCheck/>,
    withCloseButton: true,            // Rounded corners
    withBorder: true,        // Adds subtle border
    className : "border-green-500"        // Auto closes after 5 seconds
  });
};
