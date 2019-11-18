import { put, all, call, fork, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import {
    ADDFILELIST_REQUEST,
    ADDFILELIST_SUCCESS,
    ADDFILELIST_FAILURE
} from "../reducers/AddfileList";

function fetchAPI(args) {
    return axios.get('http://localhost:3000/addFileList')
}

function* fetchInfo(action){
    try{
        const result = yield call(fetchAPI, action.data);
        yield put({
            type: ADDFILELIST_SUCCESS,
            data: result.data,
        });
    } catch(e){
        console.error(e);
        yield put({
            type: ADDFILELIST_FAILURE,
            message: e.message,
        });
    }
}

function* watchFetch(){
    yield takeEvery(ADDFILELIST_REQUEST, fetchInfo);
}

export default function* userSaga(){
    yield all([
        fork(watchFetch),
    ]);
}
