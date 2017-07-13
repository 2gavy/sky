import greetings from './greetings';
import users from './users';
import reports from './reports';

module.exports = {
  ...greetings, //GET_GREETING: 'GET_GREETING',
  ...users, //GET_USERS: 'GET_USERS',
  ...reports //GET_REPORTS: 'GET_REPORTS',
};


