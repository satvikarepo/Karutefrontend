import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';

import { colors } from './app/theme/vars';
import { Stack, Routes } from './app/routes';
import { default as theme } from './app/theme/eva-1.json'; 

export default function App() {

  return (
    <>
    {/* <IconRegistry icons={EvaIconsPack} /> */}
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <StatusBar style='dark' />
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ApplicationProvider>
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
