import {
  GET_PROFILE
} from './actionTypes'; 


import axios from 'axios';

import GraphQLSettings from '../../../graphql.json';

let GraphQLEndpoint = GraphQLSettings.development.endpoint;

if (process.env.NODE_ENV === 'production') {
  GraphQLEndpoint = GraphQLSettings.production.endpoint;
}

function getProfile(profile) {

  return dispatch => {
      console.log('profile', profile)
      dispatch({
        type: GET_PROFILE, 
        result: profile,
      });
  };
}

module.exports = {
  getProfile,
};

