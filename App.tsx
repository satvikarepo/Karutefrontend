import React,{useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text  } from 'react-native';
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';

import { colors } from './app/theme/vars';
import { Stack, Routes } from './app/routes';
import { default as theme } from './app/theme/eva-1.json'; 
import BottomTabBar from './app/screen/Private/BottomTabBar';

export default function App() {
  const [isLoggedin, setLogin]=useState(false);

  return (
    <>
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <StatusBar style='dark' />
        {isLoggedin ? 
        <BottomTabBar setLogin={setLogin} />
        : <NavigationContainer>
        <Routes setLogin={setLogin} />
      </NavigationContainer>
      }
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
