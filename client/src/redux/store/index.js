import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import socketMiddleware from '../middleware/socketMiddleware';
import socketService from '../../services/socket-service';

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk, socketMiddleware(socketService))
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
