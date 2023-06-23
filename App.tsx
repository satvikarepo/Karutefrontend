import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { colors } from './app/theme/vars';
import { Stack, Routes } from './app/routes';

export default function App() {

  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
