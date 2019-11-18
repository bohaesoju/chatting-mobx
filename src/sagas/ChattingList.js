import { put, all, call, fork, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {
    CHATTINGLIST_REQUEST,
    CHATTINGLIST_SUCCESS,
    CHATTINGLIST_FAILURE
} from "../reducers/ChattingList";

function fetchAPI(args) {
    return axios.get('http://localhost:3000/friendslist')
}

function* fetchInfo(action){
    try{
        const result = yield call(fetchAPI, action.data);
        yield put({
            type: CHATTINGLIST_SUCCESS,
            data: result.data,
        });
    } catch(e){
        console.error(e);
        yield put({
            type: CHATTINGLIST_FAILURE,
            message: e.message,
        });
    }
}

function* watchFetch(){
    yield takeEvery(CHATTINGLIST_REQUEST, fetchInfo);
}

export default function* userSaga(){
    yield all([
        fork(watchFetch),
    ]);
}
