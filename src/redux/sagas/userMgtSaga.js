import { call, put, takeLatest} from 'redux-saga/effects';
import { browserHistory } from 'react-router';
import * as Types from '../actions/actionTypes/users';
import * as Actions from '../actions/users';
import * as Service from '../apis/UserService';

function* loginUserRequestAsync(action) {
    try {
        console.log(action);
        yield call(Service.loginUser, action.payload.username, action.payload.password);
        const user = yield call(Service.getSelf);
        yield put(Actions.loginUserSuccess(user));
        yield call(browserHistory.push, '/');
    } catch (e) {
        console.log(e.message);
    } finally {
        yield put(Actions.loginUserSuccess(action.payload));
    }
}

export default function*() {
    yield takeLatest(Types.LOGIN_USER_REQUESTED, loginUserRequestAsync);
}
