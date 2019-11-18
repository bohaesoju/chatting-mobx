export const ADDFILELIST_REQUEST = 'ADDFILELIST_REQUEST';
export const ADDFILELIST_SUCCESS = 'ADDFILELIST_SUCCESS';
export const ADDFILELIST_FAILURE = 'ADDFILELIST_FAILURE';
export const SEND_TO_IMAGE = 'SEND_TO_IMAGE';
export const SEND_TO_TEXT = 'SEND_TO_TEXT';

export const sendToImage = (i) => {
    console.log('image : ', i);
    return {
        type: SEND_TO_IMAGE,
        index: i,
        id: new Date().getTime()
    }
};

export const sendToText = (i) => {
    console.log('text : ', i)
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
    switch(action.type){
        case ADDFILELIST_REQUEST:
            return {
                ...state,
                isFetchAddfileList: false
            };
        case ADDFILELIST_SUCCESS:
            return {
                ...state,
                data: action.data,
                isFetchAddfileList: true
            };
        case ADDFILELIST_FAILURE:
            return {
                ...state,
                data: null,
                isFetchAddfileList: false
            };
        case SEND_TO_IMAGE:
            state.textImage.push(action);
            return {
                ...state,
            };
        case SEND_TO_TEXT:
            state.textImage.push(action);
            return {
                ...state,
            };
        default:
            return Object.assign({}, state);
    }
};

export default addfileList;
