import axios from 'axios';
import * as config from '../../../appConfig';

const instance = axios.create({
    baseURL: config.REPORT_HOST_ADDR,
    headers: {
        'Content-Type': 'application/json'
    },
    responseType: 'json'
});

export function createReport(obj) {
    return instance.post('/reports', obj);
}

export function updateReport(id) {
    return instance.post('/reports', id);
}

export function deleteReport(id) {
    return instance.post('/reports', id);
}

export function getReport(id) {
    return instance.post('/reports', id);
}

