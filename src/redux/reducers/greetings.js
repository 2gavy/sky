import {
  GET_GREETINGS
} from '../actions/actionTypes';

function greetings(state = [], action) {
	console.log(state, action);
  switch(action.type) {
    case GET_GREETINGS:
      return action.result.data.greetings;
    default:
      return state;
  }
}

module.exports = {
  greetings,
};
