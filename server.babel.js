import path from 'path';
import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';

import graphQLHTTP from 'express-graphql';
import createSagaMiddleware from 'redux-saga'
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import routes from './src/routes';
import {
  setupReducers,
  applyMiddleware,
  replaceReducers,
  renderHTMLString,
} from '@sketchpixy/rubix/lib/node/redux-router';
import RubixAssetMiddleware from '@sketchpixy/rubix/lib/node/RubixAssetMiddleware';

import reducers from './src/redux/reducers';
import sagas from './src/redux/sagas';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

setupReducers(reducers);
applyMiddleware(sagaMiddleware);

const port = process.env.PORT || 8080;

let app = express();
app.use(compression());
app.use(cookieParser());
app.use(express.static(path.join(process.cwd(), 'public')));
app.set('views', path.join(process.cwd(), 'views'));
app.set('view engine', 'pug');

function renderHTML(req, res) {
  renderHTMLString(routes, req, (error, redirectLocation, data) => {
    if (error) {
      if (error.message === 'Not found') {
        res.status(404).send(error.message);
      } else {
        res.status(500).send(error.message);
      }
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else {
      res.render('index', {
        content: data.content,
        data: JSON.stringify(data.data).replace(/\//g, '\\/')
      });
    }
  });
  sagaMiddleware.run(sagas);
}

app.get('*', RubixAssetMiddleware('ltr'), (req, res, next) => {
  renderHTML(req, res);
});

app.listen(port, () => {
  console.log(`Node.js app is running at http://localhost:${port}/`);
});
