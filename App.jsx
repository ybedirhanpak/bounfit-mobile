import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { enableScreens } from 'react-native-screens';
import configureStore from './src/state/configureStore';
import appTheme from './src/theme/custom-theme.json';
import StatusBar from './src/components/statusBar';
import AppNavigator from './src/navigator/navigation';

enableScreens();

const { store, persistor } = configureStore();

const theme = { ...lightTheme, ...appTheme };

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider mapping={mapping} theme={theme}>
        <StatusBar />
        <AppNavigator />
      </ApplicationProvider>
    </PersistGate>
  </Provider>
);

export default App;
