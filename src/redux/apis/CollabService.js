import axios from 'axios';
import * as config from '../../../appConfig';
import { toast } from 'react-toastify';

const instance = axios.create({
    baseURL: config.COLLAB_BACKEND_HOST,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    responseType: 'json',
    withCredentials: true
});

export function getCloud() {
    return instance.get('/cloud/');
}

export function getDocList(labelId) {
    return instance.get('/test4/');
}

export function getTrendData(labelId) {
    return instance.get('/trend/');
}





