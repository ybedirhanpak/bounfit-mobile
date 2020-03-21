import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/state/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  ApplicationProvider,
  IconRegistry
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { default as appTheme } from './src/theme/custom-theme.json';

import {
  mapping,
  light as lightTheme,
  dark as darkTheme
} from '@eva-design/eva';

import AppNavigator from './src/navigator/navigation';

const middlewares = [thunk];
const enhancer = composeWithDevTools({
  // Options: https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md#options
})(applyMiddleware(...middlewares));

const store = createStore(
  rootReducer,
  enhancer
);

const theme = { ...lightTheme, ...appTheme };

const App = () => (
  <Provider store={store}>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={theme}>
      <AppNavigator />
    </ApplicationProvider>
  </Provider>
);

export default App;
