const { produce } = require('immer');

export const ADDFILELIST_REQUEST = 'ADDFILELIST_REQUEST';
export const ADDFILELIST_SUCCESS = 'ADDFILELIST_SUCCESS';
export const ADDFILELIST_FAILURE = 'ADDFILELIST_FAILURE';
export const SEND_TO_IMAGE = 'SEND_TO_IMAGE';
export const SEND_TO_TEXT = 'SEND_TO_TEXT';

export const sendToImage = (i) => {
    return {
        type: SEND_TO_IMAGE,
        index: i,
        id: new Date().getTime()
    }
};

export const sendToText = (i) => {
    return {
        type: SEND_TO_TEXT,
        index: i,
        id: new Date().getTime()
    }
};

const initialState = {
    data: [],
    isFetchAddfileList: false,
    id: '',
    textImage: [],
};

const addfileList = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch(action.type){
            case ADDFILELIST_REQUEST:
                draft.isFetchAddfileList = false;
                break;
            case ADDFILELIST_SUCCESS:
                draft.data = action.data;
                draft.isFetchAddfileList = true;
                break;
            case ADDFILELIST_FAILURE:
                draft.data = null;
                draft.isFetchAddfileList = false;
                break;
            case SEND_TO_IMAGE:
                draft.textImage.push(action);
                break;
            case SEND_TO_TEXT:
                draft.textImage.push(action);
                break;
            default:
                return Object.assign({}, state);
        }
    })
};

export default addfileList;
