import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import { ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, createDummyPosts, LOAD_ALLPOSTS_FAILURE, LOAD_ALLPOSTS_REQUEST, LOAD_ALLPOSTS_SUCCESS } from '../reducer/post';

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

function* addPosts(action) {
    console.log(action.data.content);
    try {
        yield delay(1000);
        yield put({
            type: ADD_POST_SUCCESS,
            data: {
                nickname: action.data.nickname,
                avatar: action.data.avatar,
                content: action.data.content,
                words: action.data.words,
            },
        })
    } catch (error) {
        console.log(error);
        yield put({
            type: ADD_POST_FAILURE,
            data: error.response.data
        })
    }
}

function* watchLoadPosts() {
    yield takeLatest(LOAD_ALLPOSTS_REQUEST, loadPosts);
}

function* watchAddPosts() {
    yield takeLatest(ADD_POST_REQUEST, addPosts);
}

export default function* postSaga() {
    yield all([
        fork(watchLoadPosts),
        fork(watchAddPosts),
    ])
}