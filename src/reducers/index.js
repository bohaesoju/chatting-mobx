import { combineReducers } from 'redux';
import ChattingList from './ChattingList';
import AddfileList from './AddfileList';

export const rootReducer = combineReducers({
    ChattingList,
    AddfileList
});
