import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import { ADD_COMMENTS_FAILURE, ADD_COMMENTS_REQUEST, ADD_COMMENTS_SUCCESS, ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, createDummyPosts, LOAD_ALLPOSTS_FAILURE, LOAD_ALLPOSTS_REQUEST, LOAD_ALLPOSTS_SUCCESS, REMOVE_COMMENTS_FAILURE, REMOVE_COMMENTS_REQUEST, REMOVE_COMMENTS_SUCCESS, REMOVE_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, UPDATE_LIKE_COMMENT_FAILURE, UPDATE_LIKE_COMMENT_REQUEST, UPDATE_LIKE_COMMENT_SUCCESS, UPDATE_LIKE_POST_FAILURE, UPDATE_LIKE_POST_REQUEST, UPDATE_LIKE_POST_SUCCESS, UPDATE_POST_FAILURE, UPDATE_POST_REQUEST, UPDATE_POST_SUCCESS } from '../reducer/post';

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

function* removePosts(action) {
    try {
        yield delay(500);
        yield put({
            type: REMOVE_POST_SUCCESS,
            data: action.data,
        })
    } catch (error) {
        console.log(error);
        yield put({
            type: REMOVE_POST_FAILURE,
            data: error.response.data
        })
    }
}

function* updatePosts(action) {
    try {
        yield delay(500);
        yield put({
            type: UPDATE_POST_SUCCESS,
            data: action.data,
        })
    } catch (error) {
        console.log(error);
        yield put({
            type: UPDATE_POST_FAILURE,
            data: error.response.data
        })
    }
}

function* updateLikePost(action) {
    try {
        yield put({
            type: UPDATE_LIKE_POST_SUCCESS,
            data: action.data,
        })
    } catch (error) {
        console.log(error);
        yield put({
            type: UPDATE_LIKE_POST_FAILURE,
            data: error.response.data
        })
    }
}


function* addComment(action) {
    try {
        yield put({
            type: ADD_COMMENTS_SUCCESS,
            data: {
                PostId: action.data.PostId,
                nickname: action.data.nickname,
                avatar: action.data.avatar,
                words: action.data.words,
            },
        })
    } catch (error) {
        console.log(error);
        yield put({
            type: ADD_COMMENTS_FAILURE,
            data: error.response.data
        })
    }
}

function* removeComment(action) {
    try {
        yield put({
            type: REMOVE_COMMENTS_SUCCESS,
            data: action.data
        })
    } catch (error) {
        console.log(error);
        yield put({
            type: REMOVE_COMMENTS_FAILURE,
            data: error.response.data
        })
    }
}

function* updateLikeComment(action) {
    try {
        yield put({
            type: UPDATE_LIKE_COMMENT_SUCCESS,
            data: action.data,
        })
    } catch (error) {
        console.log(error);
        yield put({
            type: UPDATE_LIKE_COMMENT_FAILURE,
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

function* watchRemovePosts() {
    yield takeLatest(REMOVE_POST_REQUEST, removePosts);
}

function* watchUpdatePosts() {
    yield takeLatest(UPDATE_POST_REQUEST, updatePosts);
}

function* watchUpdateLikePost() {
    yield takeLatest(UPDATE_LIKE_POST_REQUEST, updateLikePost);
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENTS_REQUEST, addComment);
}

function* watchRemoveComment() {
    yield takeLatest(REMOVE_COMMENTS_REQUEST, removeComment);
}

function* watchUpdateLikeComment() {
    yield takeLatest(UPDATE_LIKE_COMMENT_REQUEST, updateLikeComment);
}

export default function* postSaga() {
    yield all([
        fork(watchLoadPosts),
        fork(watchAddPosts),
        fork(watchRemovePosts),
        fork(watchUpdatePosts),
        fork(watchUpdateLikePost),
        fork(watchAddComment),
        fork(watchRemoveComment),
        fork(watchUpdateLikeComment),
    ])
}