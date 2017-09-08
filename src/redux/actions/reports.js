import * as Actions from "./actionTypes/reports";

export function reportFieldsTitleUpdate(data) {
  return {
    type: Actions.REPORT_FIELDS_TITLE_UPDATE,
    payload: data
  };
}

export function reportFieldsSourceUpdate(data) {
  return {
    type: Actions.REPORT_FIELDS_SOURCE_UPDATE,
    payload: data
  };
}

export function reportFieldsAuthorUpdate(data) {
  return {
    type: Actions.REPORT_FIELDS_AUTHOR_UPDATE,
    payload: data
  };
}

export function reportFieldsContentUpdate(data) {
  return {
    type: Actions.REPORT_FIELDS_CONTENT_UPDATE,
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
