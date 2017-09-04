import * as Actions from '../actions/actionTypes/users';

const initialState = {
    loginUser: {},
    profiles: [],
}

const users = (state = initialState, action) => {
  switch(action.type) {
    case Actions.LOGIN_USER_SUCCESS:
      return Object.assign({}, state, {
          loginUser: action.payload,
      });
    case Actions.GET_USERS_REQUESTED:
      return Object.assign({}, state, {
          profiles: action.payload
      });
    case Actions.LOGIN_USER_REQUESTED:
      // console.log(action.payload);
      return state;
    default:
      return state;
  }
}

export default users;
