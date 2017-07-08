import {
  GET_USERS
} from './actionTypes'; 


import axios from 'axios';

import GraphQLSettings from '../../../graphql.json';

let GraphQLEndpoint = GraphQLSettings.development.endpoint;

if (process.env.NODE_ENV === 'production') {
  GraphQLEndpoint = GraphQLSettings.production.endpoint;
}

function getUsers(users) {

  return dispatch => {
      console.log('users', users)
      dispatch({
        type: GET_USERS, 
        result: users,
      });
  };
}

module.exports = {
  getUsers,
};

