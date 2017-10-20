import * as Actions from "../actions/actionTypes/users";

const initialState = {
  loginUser: {},
  users: [],
  //profile: {
  //   profilePic: '/imgs/app/avatars/avatar16.png',
  //   name: 'ong ting wei',
  //   department: 'IT',
  //   accessRights: ['admin','read','write'],
  //   isUserRemoved: false,
  // },
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOGIN_USER_SUCCESS:
      return Object.assign({}, state, {
        loginUser: action.payload
      });
    case Actions.GET_USERS_SUCCESS:
      console.log(action);
      return Object.assign({}, state, {
        users: action.payload
      });
    case Actions.UPDATE_USER_SUCCESS:
      return {
        ...state,
        users: action.payload
      }
    case Actions.LOGIN_USER_REQUESTED:
      // console.log(action.payload);
      return state;
    case Actions.LOGOUT_USER_SUCCESS:
      return initialState;
    default:
      return state;
  }
};

export default users;
