import React from "react";
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import { Provider } from 'react-redux';

import store from './app/redux/store';
import MainComponent from "./app/MainComponent";
import {themeLight} from "./app/theme/ThemeLight";


export default function App() {

  return (
    <>
      <ApplicationProvider {...eva}
        theme={themeLight}
        customMapping={{
          ...eva.mapping
        }}
        >
        <Provider store={store}>
          <MainComponent />
        </Provider>
      </ApplicationProvider>
    </>
  );
}
