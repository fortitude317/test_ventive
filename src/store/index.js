import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from './reducer'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['user'],
  };

const persistedReducer = () => persistReducer(persistConfig, rootReducer);

export default function getStore() {
    // create a store with middleware and reducer
    // TODO - Disable logger for production
    store = createStore(
      persistedReducer(),
    );
  
    const persistor = persistStore(store);

    return { store, persistor };
  }
  