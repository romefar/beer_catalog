import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from '../reducers';
import socketMiddleware from '../middleware/socketMiddleware';
import socketService from '../../services/socket-service';

const persistConfig = {
  key: 'br_catalog_user',
  storage: storage,
  whitelist: ['theme']
};

const pReducer = persistReducer(persistConfig, reducers);

export const store = createStore(pReducer, compose(
  applyMiddleware(thunk, socketMiddleware(socketService))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export const persistor = persistStore(store);
