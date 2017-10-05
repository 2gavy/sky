import * as Actions from './actionTypes/reportsjz';

export function ReportFieldTitleEdit(data) {
    return {
        type: Actions.REPORTS_FIELD_TITLE_EDIT,
        payload: data
    };
}

export function ReportFieldBodyEdit(data) {
    return {
        type: Actions.REPORT_FIELD_BODY_EDIT,
        payload: data
    };
}

export function ReportSetFields(data) {
    return {
        type: Actions.REPORT_SET_FIELDS,
        payload: data
    };
}

