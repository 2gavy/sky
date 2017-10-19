import { call, put, takeLatest} from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import * as Types from '../actions/actionTypes/users';
import * as Actions from '../actions/users';
import * as Service from '../apis/UserService';
import omit from 'lodash/omit';

function* loginUserRequestAsync(action) {
    try {
        console.log(action);
        yield call(Service.loginUser, action.payload.username, action.payload.password);
        const user = yield call(Service.getSelf);
        yield put(Actions.loginUserSuccess(user.data));
        yield call(browserHistory.push, '/');
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

<<<<<<< HEAD
function* updateUserRequestAsync(action) {
    try {
        // console.log(omit(action.payload, ['userid']));
        yield call(Service.updateUser, action.payload.userid, omit(action.payload, ['userid']));
    } catch (e) {
        console.log(e.message);
    } finally {
        const userList = yield call(Service.getUsers);
        yield put(Actions.getUsersSuccess(userList.data.docs));
=======
function* deleteUserRequestAsync(action) {
    try {
        const res = yield call(Service.deleteUser, action.payload);
        console.log(res);
        yield put(Actions.deleteUserSuccess(res.data));
    } catch (e) {
        console.log(e.message)
        yield put(Actions.deleteUserFailed(e.data));
>>>>>>> d7efd16b330cb27954b33596c4887bb0401d76d4
    }
}

export default function*() {
    yield takeLatest(Types.LOGIN_USER_REQUESTED, loginUserRequestAsync);
    yield takeLatest(Types.GET_USERS_REQUESTED, getUsersRequestAsync);
<<<<<<< HEAD
    yield takeLatest(Types.UPDATE_USER_REQUESTED, updateUserRequestAsync);
=======
    yield takeLatest(Types.DELETE_USER_REQUESTED, deleteUserRequestAsync);
>>>>>>> d7efd16b330cb27954b33596c4887bb0401d76d4
}
