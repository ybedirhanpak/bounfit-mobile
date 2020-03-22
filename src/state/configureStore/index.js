import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [thunk];
const enhancer = composeWithDevTools({
  // Options: https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md#options
})(applyMiddleware(...middlewares));

export default () => {
  const store = createStore(persistedReducer, enhancer);
  const persistor = persistStore(store);
  return { store, persistor };
};
