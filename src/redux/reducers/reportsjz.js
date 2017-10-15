import * as Actions from '../actions/actionTypes/reportsjz';

const initialState = {
    docid: '',
    title: '',
    captureDatetime: '',
    source: '',
    content:'',
    entities:[]
};

const report = (state = initialState, action) => {
    switch(action.type) {
        case Actions.REPORTS_FIELD_TITLE_EDIT: 
            return {...state, ...action.payload};
        case Actions.REPORT_FIELD_BODY_EDIT:
            return {...state, ...action.payload};
        case Actions.REPORT_SET_FIELDS: 
            return {...state, ...action.payload};
        default: 
            return state;
    }
};

export default report;

