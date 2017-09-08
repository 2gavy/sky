import * as Actions from "../actions/actionTypes/reports";

const initialState = {
    title: '',
    source: '',
    author: '',
    content: '',
};

const reports = (state = initialState, action) => {
    switch(action.type) {
        case Actions.REPORT_FIELDS_TITLE_UPDATE:
            return {...state, ...action.payload};
        case Actions.REPORT_FIELDS_SOURCE_UPDATE:
            return {...state, ...action.payload};
        case Actions.REPORT_FIELDS_AUTHOR_UPDATE:
            return {...state, ...action.payload};
        case Actions.REPORT_FIELDS_CONTENT_UPDATE:
            return {...state, ...action.payload};
        default:
          return state;
    }
}

export default reports;
