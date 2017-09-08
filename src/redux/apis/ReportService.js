import axios from 'axios';
import * as config from '../../../appConfig';

const instance = axios.create({
    baseURL: config.REPORT_HOST_ADDR,
    headers: {
        'Content-Type': 'application/json'
    },
    responseType: 'json',
    withCredentials: true
});

export function createReport(obj) {
    return instance.post('/create', obj);
}
