import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider, Text } from '@mantine/core';

export default function App() {
  return (
    <MantineProvider>
      <Text fw={700} ta="center" size="xl" mt="xl">
        Welcome to Mantine 7!
      </Text>
    </MantineProvider>
  );
}


