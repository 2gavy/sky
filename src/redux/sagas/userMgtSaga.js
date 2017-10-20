import { call, put, takeLatest} from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import * as Types from '../actions/actionTypes/users';
import * as Actions from '../actions/users';
import * as Service from '../apis/UserService';
import omit from 'lodash/omit';
import {toast} from 'react-toastify';

function* loginUserRequestAsync(action) {
    try {
        console.log(action);
        yield call(Service.loginUser, action.payload.username, action.payload.password);
        const user = yield call(Service.getSelf);
        yield put(Actions.loginUserSuccess(user.data));
        yield call(browserHistory.push, '/home');
    } catch (e) {
        console.log(e.message);
    }
    // finally {
    //     yield put(Actions.loginUserSuccess(action.payload));
    // }
}

function* getUsersRequestAsync(action) {
    try {
        const userList = yield call(Service.getUsers);
        yield put(Actions.getUsersSuccess(userList.data.docs));
    } catch (e) {
        console.log(e.message);
    }
}
function* updateUserRequestAsync(action) {
    try {
        // console.log(omit(action.payload, ['userid']));
        yield call(Service.updateUser, action.payload.userid, omit(action.payload, ['userid']));
        toast.success('User updated successfully');
    } catch (e) {
        console.log(e.message);
        toast.error('Unable to update : ' + e.message);
    } finally {
        const userList = yield call(Service.getUsers);
        yield put(Actions.getUsersSuccess(userList.data.docs));
    }
}
function* deleteUserRequestAsync(action) {
    try {
        const res = yield call(Service.deleteUser, action.payload);
        console.log(res);
        yield put(Actions.deleteUserSuccess(res.data));
        toast.success('User deleted successfully');
    } catch (e) {
        console.log(e.message)
        yield put(Actions.deleteUserFailed(e.data));
        toast.error('Unable to delete : ' + e.message);
    } finally {
        const userList = yield call(Service.getUsers);
        yield put(Actions.getUsersSuccess(userList.data.docs));
    }
}

function* updateSelfRequestAsync(action) {
    try {
        //console.log("action.payload.profile"+action.payload.profile);
        const user = yield call(Service.updateSelf,action.payload.profile);
        //console.log("saga - updateSelfRequestAsync");
       // console.log(user);
        yield put(Actions.updateSelfSuccess(user.data));
        toast.success('Updated successfully');
        yield call(browserHistory.push, '/home');
    } catch (e) {
        console.log(e.message);
    }
}

function* logoutUserRequestAsync() {
    try {
        yield call(Service.logoutUser);
        yield put(Actions.logoutUserSuccess());
        toast.info('Logout Successfully');
    } catch (e) {
        console.log(e.message);
        toast.error('Logout not successful : ' + e.message);
    } finally {
        yield call(browserHistory.push, '/login');
    }
}
function* createUserRequestAsync(action) {
    try {
        console.log('createUserRequestAsync',action.payload);
        yield call(Service.createUser, action.payload);
        toast.success('User created successfully');
    } catch (e) {
        console.log(e.message);
        toast.error('Unable to create : ' + e.message);
    } finally {
        const userList = yield call(Service.getUsers);
        yield put(Actions.getUsersSuccess(userList.data.docs));
    }
}
export default function*() {
    yield takeLatest(Types.LOGIN_USER_REQUESTED, loginUserRequestAsync);
    yield takeLatest(Types.GET_USERS_REQUESTED, getUsersRequestAsync);
    yield takeLatest(Types.UPDATE_USER_REQUESTED, updateUserRequestAsync);
    yield takeLatest(Types.DELETE_USER_REQUESTED, deleteUserRequestAsync);
    yield takeLatest(Types.UPDATE_SELF_REQUESTED, updateSelfRequestAsync);
    yield takeLatest(Types.LOGOUT_USER_REQUESTED, logoutUserRequestAsync);
    yield takeLatest(Types.CREATE_USER_REQUESTED, createUserRequestAsync);
}
