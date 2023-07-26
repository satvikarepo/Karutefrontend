import React from "react";
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import { useSelector } from './redux/store';
import { Routes } from './routes';
import BottomTabBar from './screen/Private/BottomTabBar';
import { colors } from "./theme/vars";
import { AppModal } from "./common/components/AppModal";
import { GlobalLoader } from "./common/components/GlobalLoader";


export default function MainComponent() {
  const loggedIn = useSelector(state => state.global.loggedIn);

  return (
    <>
      <AppModal />
      <GlobalLoader />
      <StatusBar style='auto' backgroundColor={colors.bg} translucent />
      {(loggedIn) ?
        <BottomTabBar />
        : <NavigationContainer>
          <Routes />
        </NavigationContainer>
      }
    </>
  );
}

