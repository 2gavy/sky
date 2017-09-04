import greetings from './greetings';
import * as users from './users';
import reports from './reports';
import profile from './profile';

module.exports = {
  ...greetings,
  ...users,
  ...reports,
  ...profile
};
