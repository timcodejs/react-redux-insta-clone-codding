import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import { createDummyPosts, LOAD_ALLPOSTS_FAILURE, LOAD_ALLPOSTS_REQUEST, LOAD_ALLPOSTS_SUCCESS } from '../reducer/post';

function* loadPosts() {
    try {
        yield put({
            type: LOAD_ALLPOSTS_SUCCESS,
            data: createDummyPosts(15),
        })
    } catch (error) {
        console.log(error);
        yield put({
            type: LOAD_ALLPOSTS_FAILURE,
            data: error.response.data
        })
    }
}

function* watchLoadPosts() {
    yield takeLatest(LOAD_ALLPOSTS_REQUEST, loadPosts);
}

export default function* postSaga() {
    yield all([
        fork(watchLoadPosts),
    ])
}