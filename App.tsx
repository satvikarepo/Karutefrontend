import React from "react";
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

import { default as theme } from './app/theme/eva-1.json';
import store from './app/redux/store';
import MainComponent from "./app/MainComponent";


export default function App() {

  return (
    <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <Provider store={store}>
          <MainComponent />
        </Provider>
      </ApplicationProvider>
  );
}
