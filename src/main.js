require('es6-promise').polyfill();

import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga'
import routes from './routes';
import sagas from './redux/sagas';
import render, {
  setupReducers,
  applyMiddleware,
  replaceReducers,
  createReduxStore,
} from '@sketchpixy/rubix/lib/node/redux-router';

import reducers from './redux/reducers';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

setupReducers(reducers);
applyMiddleware(sagaMiddleware);
render(routes);
sagaMiddleware.run(sagas);
if (module.hot) {
  module.hot.accept('./routes', () => {
    // reload routes again
    require('./routes').default;
    render(routes);
  });

  module.hot.accept('./redux/reducers', () => {
    // reload reducers again
    let newReducers = require('./redux/reducers');
    replaceReducers(newReducers);
  });
}
