import {
  GET_PROFILE
} from '../actions/actionTypes';

function profile(state = [], action) {
  switch(action.type) {
    case GET_PROFILE:
      return action.result;
    default:
      return state;
  }
}

module.exports = {
  profile,
};
