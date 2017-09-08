import {
  GET_REPORTS
} from './actionTypes'; 

import axios from 'axios';

import GraphQLSettings from '../../../graphql.json';

let GraphQLEndpoint = GraphQLSettings.development.endpoint;

if (process.env.NODE_ENV === 'production') {
  GraphQLEndpoint = GraphQLSettings.production.endpoint;
}

function getReports(reports) {

  return dispatch => {
      console.log('reports', reports)
      dispatch({
        type: GET_REPORTS, 
        result: reports,
      });
  };
}

module.exports = {
  getReports,
};

