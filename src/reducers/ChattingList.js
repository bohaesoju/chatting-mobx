const { produce } = require('immer');

export const CHATTINGLIST_REQUEST = 'CHATTINGLIST_REQUEST';
export const CHATTINGLIST_SUCCESS = 'CHATTINGLIST_SUCCESS';
export const CHATTINGLIST_FAILURE = 'CHATTINGLIST_FAILURE';

const initialState = {
    data: [],
    isFetchChattingList: false
};

const chattingList = (state = initialState, action) => {
    return produce (state, (draft) => {
        switch(action.type){
            case CHATTINGLIST_REQUEST:
                draft.isFetchChattingList = false;
                break;
            case CHATTINGLIST_SUCCESS:
                draft.data = action.data;
                draft.isFetchChattingList = true;
                break;
            case CHATTINGLIST_FAILURE:
                draft.data = null;
                draft.isFetchChattingList = false;
                break;
            default:
                return Object.assign({}, state);
        }
    })
};

export default chattingList;
