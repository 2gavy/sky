import axios from 'axios';
import * as config from '../../../appConfig';

const instance = axios.create({
    baseURL: config.REPORT_HOST_ADDR,
    headers: {
        'Content-Type': 'application/json',
	'Accept': 'application/json'
    },
    responseType: 'json',
    withCredentials: false
});

export function createReport(obj) {
    console.log('came to apis');
    console.log(obj);
    return instance.post('reports', obj);
}

export function updateReport(obj) {
    console.log('The data capture' + obj);
    return instance.put('/reports', obj);
}

export function deleteReport(id) {
    return instance.post('/reports', id);
}

export function getReport(id) {
    return instance.post('/reports', id);
}

