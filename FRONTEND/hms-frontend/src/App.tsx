import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider, createTheme, Button, Text } from '@mantine/core';

// ✅ Define custom theme
const theme = createTheme({
  focusRing: "never",
  colors: {
    primary: [
      '#f1fcfa', '#cff8ef', '#9ff0e1', '#67e1cf', '#32b9a9',
      '#1fad9f', '#168b82', '#166f69', '#165955', '#174a47', '#072c2b'
    ],
    neutral: [
      '#f6f6f6', '#e7e7e7', '#d1d1d1', '#b0b0b0', '#888888',
      '#6d6d6d', '#5d5d5d', '#4f4f4f', '#454545', '#3d3d3d', '#000000'
    ],
  },
  primaryColor: 'primary',
  primaryShade:  4 // 👈 tells Mantine which color to use as default
});

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <Text size="xl" fw={700} c="primary.6">
          Welcome to Mantine with Custom Theme 🎨
        </Text>
        <Button color="primary" mt="lg" radius="md">
          Custom Themed Button
        </Button>
      </div>
    </MantineProvider>
  );
}
