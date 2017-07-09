import greetings from './greetings';
import users from './users';

module.exports = {
  ...greetings, //GET_GREETING: 'GET_GREETING',
  ...users //GET_USERS: 'GET_USERS',
};


