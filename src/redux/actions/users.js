import * as Actions from "./actionTypes/users";
import * as Service from "../apis/UserService";
// import GraphQLSettings from '../../../graphql.json';
//
// let GraphQLEndpoint = GraphQLSettings.development.endpoint;
//
// if (process.env.NODE_ENV === 'production') {
//   GraphQLEndpoint = GraphQLSettings.production.endpoint;
// }
export function getUsersRequest(data) {
  return {
    type: Actions.GET_USERS_REQUESTED,
    payload: data
  };
}
export function getUsersSuccess(data) {
  return {
    type: Actions.GET_USERS_SUCCESS,
    payload: data
  };
}

export function getUsersFailed(data) {
  return {
    type: Actions.GET_USERS_FAILED,
    payload: data
  };
}

export function loginUserRequest(data) {
  return {
    type: Actions.LOGIN_USER_REQUESTED,
    payload: data
  };
}

export function loginUserSuccess(data) {
  return {
    type: Actions.LOGIN_USER_SUCCESS,
    payload: data
  };
}

export function loginUserFailed(data) {
  return {
    type: Actions.LOGIN_USER_FAILED,
    payload: data
  };
}

export function logoutUserRequest(data) {
  return {
    type: Actions.LOGOUT_USER_REQUESTED,
    payload: data
  };
}

export function logoutUserSuccess(data) {
  return {
    type: Actions.LOGOUT_USER_SUCCESS,
    payload: data
  };
}

export function logoutUserFailed(data) {
  return {
    type: Actions.LOGOUT_USER_FAILED,
    payload: data
  };
}

export function createUserRequest(data) {
  return {
    type: Actions.CREATE_USER_REQUESTED,
    payload: data
  };
}

export function createUserSuccess(data) {
  return {
    type: Actions.CREATE_USER_SUCCESS,
    payload: data
  };
}

export function createUserFailed(data) {
  return {
    type: Actions.CREATE_USER_FAILED,
    payload: data
  };
}

export function getSelfRequest(data) {
  return {
    type: Actions.GET_SELF_REQUESTED,
    payload: data
  };
}

export function getSelfSuccess(data) {
  return {
    type: Actions.GET_SELF_SUCCESS,
    payload: data
  };
}

export function getSelfFailed(data) {
  return {
    type: Actions.GET_SELF_FAILED,
    payload: data
  };
}

export function updateSelfRequest(data) {
  return {
    type: Actions.UPDATE_SELF_REQUESTED,
    payload: data
  };
}

export function updateSelfSuccess(user) {
  return {
    type: Actions.UPDATE_SELF_SUCCESS,
    payload: user
  };
}

export function updateSelfFailed(data) {
  return {
    type: Actions.UPDATE_SELF_FAILED,
    payload: data
  };
}

export function updateUserRequest(data) {
  return {
    type: Actions.UPDATE_USER_REQUESTED,
    payload: data
  };
}

export function updateUserSuccess(users) {
  return {
    type: Actions.UPDATE_USER_SUCCESS,
    payload: users
  };
}

export function updateUserFailed(data) {
  return {
    type: Actions.UPDATE_USER_FAILED,
    payload: data
  };
}

export function deleteUserRequest(data) {
  return {
    type: Actions.DELETE_USER_REQUESTED,
    payload: data
  };
}

export function deleteUserSuccess(data) {
  return {
    type: Actions.DELETE_USER_SUCCESS,
    payload: data
  };
}

export function deleteUserFailed(data) {
  return {
    type: Actions.DELETE_USER_FAILED,
    payload: data
  };
}

export function getUser() {
  return {
      type: Actions.GET_SELF_REQUESTED,
      payload: {
          1: {
              profilePic: "/imgs/app/avatars/avatar16.png",
              name: "Jenny",
              department: "IT",
              accessRights: ["admin", "read", "write"],
              isUserRemoved: false
          }
      }
  };
}

export function updateSearchPreferenceRequest(data) {
    return {
        type: Actions.UPDATE_SEARCH_PREFERENCE_REQUESTED,
        payload: data
    };
}

export function updateSearchPreferenceSuccess(data) {
    return {
        type: Actions.UPDATE_SEARCH_PREFERENCE_SUCCESS,
        payload: data
    };
}

export function updateSearchPreferenceFailed(data) {
    return {
        type: Actions.UPDATE_SEARCH_PREFERENCE_FAILED,
        payload: data
    };
}

export function getSearchPreferenceRequest(data) {
    return {
        type: Actions.GET_SEARCH_PREFERENCE_REQUESTED,
        payload: data
    };
}

export function getSearchPreferenceSuccess(data) {
    return {
        type: Actions.GET_SEARCH_PREFERENCE_SUCCESS,
        payload: data
    };
}

export function getSearchPreferenceFailed(data) {
    return {
        type: Actions.GET_SEARCH_PREFERENCE_FAILED,
        payload: data
    };
}
