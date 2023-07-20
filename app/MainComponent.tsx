import React from "react";
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import { useSelector } from './redux/store';
import { Routes } from './routes';
import BottomTabBar from './screen/Private/BottomTabBar';
import { colors } from "./theme/vars";
import { AppModel } from "./common/components/AppModel";


export default function MainComponent() {
  const global = useSelector(state => state.global);

  return (
    <>
      <AppModel />
      <StatusBar style='auto' backgroundColor={colors.bg} translucent />
      {(global.loggedIn) ?
        <BottomTabBar />
        : <NavigationContainer>
          <Routes />
        </NavigationContainer>
      }
    </>
  );
}

