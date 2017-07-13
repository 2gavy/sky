import greetings from './greetings';
import users from './users';
import reports from './reports';

module.exports = {
  ...greetings,
  ...users,
  ...reports
};
