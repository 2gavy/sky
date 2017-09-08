import {
  GET_REPORTS
} from '../actions/actionTypes';

function reports(state = [], action) {
  switch(action.type) {
    case GET_REPORTS:
      return action.result;
    default:
      return state;
  }
}

module.exports = {
  reports,
};
