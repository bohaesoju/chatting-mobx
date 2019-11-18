export const CHATTINGLIST_REQUEST = 'CHATTINGLIST_REQUEST';
export const CHATTINGLIST_SUCCESS = 'CHATTINGLIST_SUCCESS';
export const CHATTINGLIST_FAILURE = 'CHATTINGLIST_FAILURE';

const initialState = {
    data: [],
    isFetchChattingList: false
};

const chattingList = (state = initialState, action) => {
    switch(action.type){
        case CHATTINGLIST_REQUEST:
            return {
                ...state,
                isFetchChattingList: false
            };
        case CHATTINGLIST_SUCCESS:
            return {
                ...state,
                data: action.data,
                isFetchChattingList: true
            };
        case CHATTINGLIST_FAILURE:
            return {
                ...state,
                data: null,
                isFetchChattingList: false
            };
        default:
            return Object.assign({}, state);
    }
};

export default chattingList;
