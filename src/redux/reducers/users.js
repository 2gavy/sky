import * as Actions from "../actions/actionTypes/users";

const initialState = {
  loginUser: {},
  users: [],
  profile: {
     profilePic: '/imgs/app/avatars/avatar16.png',
     name: 'ong ting wei',
     department: 'IT',
     accessRights: ['admin','read','write'],
     isUserRemoved: false,
   },
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOGIN_USER_SUCCESS:
      return Object.assign({}, state, {
        loginUser: action.payload
      });
    case Actions.GET_USERS_REQUESTED:
      return Object.assign({}, state, {
        users: action.payload
      });
    case Actions.GET_USER_REQUESTED:
      return Object.assign({}, state, {
        profile: {
          id: 1,
          profilePic: "/imgs/app/avatars/avatar16.png",
          name: "ong ting wei",
          department: "IT",
          accessRights: ["admin", "read", "write"],
          isUserRemoved: false
        }
      });
    case Actions.UPDATE_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload
      }
    case Actions.LOGIN_USER_REQUESTED:
      // console.log(action.payload);
      return state;
    default:
      return state;
  }
};

export default users;
