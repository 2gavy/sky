import greetings from './greetings';
import users from './users';
import reports from './reports';
import profile from './profile';

module.exports = {
  ...greetings, 
  ...users,
  ...reports,
  ...profile
};
