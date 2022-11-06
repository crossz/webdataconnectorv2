import { compose, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducers from '../reducers/reducers';
import { defaultState } from '../utils/consts';

// Create the Redux store
// More info can be found here:
// http://redux.js.org/docs/basics/Store.html

const middlewares = [thunk];

// Uncomment to add redux logger to console, useful for debugging but slows down simulator
// const createLogger = require(`redux-logger`);
// const logger = createLogger({collapse:true});
// middlewares.push(logger);

// Hooks up to redux devtools extension which can be found:
// https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related?hl=en
const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducers,
  defaultState,
  composeWithDevTools(compose(applyMiddleware(...middlewares), devTools))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */


export default store;
