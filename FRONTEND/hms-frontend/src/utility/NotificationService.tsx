import { IconCheck } from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';

export const successNotification = (message: string) => {
  notifications.show({
    withCloseButton: true,
    title: "🎉 Successfully Registered!",
    message: message,
    color: 'teal',
    icon: <IconCheck size={22} stroke={2.5} />,
    radius: 'md',            // Rounded corners
    withBorder: true,        // Adds subtle border
    autoClose: 5000,         // Auto closes after 5 seconds
    styles: {
      root: {
        background: 'linear-gradient(45deg, #32b9a9, #166f69)',
        color: '#ffffff',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
        border: '1px solid #165955',
      },
      title: {
        fontWeight: 700,
        fontSize: 16,
      },
      description: {
        fontSize: 14,
      },
      closeButton: {
        color: '#ffffff',
        '&:hover': {
          backgroundColor: 'rgba(22, 111, 105, 0.2)',
        },
      },
    },
  });
};
