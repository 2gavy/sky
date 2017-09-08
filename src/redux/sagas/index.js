import { all } from 'redux-saga/effects';
import userMgtSaga from './userMgtSaga';

function* rootSaga() {
    yield all([
        userMgtSaga(),
    ]);
}

export default rootSaga;
