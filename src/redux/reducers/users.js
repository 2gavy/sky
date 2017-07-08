import {
  GET_USERS
} from '../actions/actionTypes';

function users(state = [], action) {
  switch(action.type) {
    case GET_USERS:
      return action.result;
    default:
      return state;
  }
}

module.exports = {
  users,
};
