import * as Actions from "./actionTypes/reports";

export function reportFieldsTitleCreate(data) {
  return {
    type: Actions.REPORT_FIELDS_TITLE_CREATE,
    payload: data
  };
}

export function reportFieldsSourceCreate(data) {
  return {
    type: Actions.REPORT_FIELDS_SOURCE_CREATE,
    payload: data
  };
}

export function reportFieldsAuthorCreate(data) {
  return {
    type: Actions.REPORT_FIELDS_AUTHOR_CREATE,
    payload: data
  };
}

export function reportFieldsDateCreate(data) {
  return {
    type: Actions.REPORT_FIELDS_AUTHOR_DATE,
    payload: data
  };
}

export function reportFieldsContentCreate(data) {
  return {
    type: Actions.REPORT_FIELDS_CONTENT_CREATE,
    payload: data
  };
}

export function reportCreateRequest(data) {
  return {
    type: Actions.REPORT_CREATE_REQUEST,
    payload: data
  };
}

export function reportCreateSuccess(data) {
  return {
    type: Actions.REPORT_CREATE_SUCCESS,
    payload: data
  };
}

export function reportCreateFail(data) {
  return {
    type: Actions.REPORT_CREATE_FAIL,
    payload: data
  };
}
