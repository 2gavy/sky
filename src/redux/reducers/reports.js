import * as Actions from "../actions/actionTypes/reports";

const initialState = {
    title: '',
    source: '',
    author: '',
    date: '',
    content: '',
};

const reports = (state = initialState, action) => {
    switch(action.type) {
        case Actions.REPORT_FIELDS_TITLE_CREATE:
            return {...state, ...action.payload};
        case Actions.REPORT_FIELDS_SOURCE_CREATE:
            return {...state, ...action.payload};
        case Actions.REPORT_FIELDS_AUTHOR_CREATE:
            return {...state, ...action.payload};
        case Actions.REPORT_FIELDS_DATE_CREATE:
            return {...state, ...action.payload};
        case Actions.REPORT_FIELDS_CONTENT_CREATE:
            return {...state, ...action.payload};
        default:
          return state;
    }
}

export default reports;
