import { all, fork } from 'redux-saga/effects';
import chattinglist from './ChattingList';
import addfilelist from './AddfileList';

export default function* rootSaga() {
    yield all([
        fork(chattinglist),
        fork(addfilelist),
    ]);
}
