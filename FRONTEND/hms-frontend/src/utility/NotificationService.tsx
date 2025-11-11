import { IconCheck } from '@tabler/icons-react';
import { notifications } from '@mantine/notifications';

const successNotification = (message: string) => {
  notifications.show({
    withCloseButton: true,
    title: "🎉 Successfully Registered!",
    message: message,
    color: 'teal',
    icon: <IconCheck size={22} stroke={2.5} />,
    radius: 'md',               // Rounded corners
    withBorder: true,           // Adds a subtle border
    autoClose: 5000,            // Auto closes after 5 seconds
    styles: (theme) => ({
      root: {
        background: theme.fn.linearGradient(45, theme.colors.teal[4], theme.colors.teal[7]),
        color: theme.white,
        boxShadow: theme.shadows.md,
        border: `1px solid ${theme.colors.teal[8]}`,
      },
      title: {
        fontWeight: 700,
        fontSize: 16,
      },
      description: {
        fontSize: 14,
      },
      closeButton: {
        color: theme.white,
        '&:hover': {
          backgroundColor: theme.fn.rgba(theme.colors.teal[9], 0.2),
        },
      },
    }),
  });
}
