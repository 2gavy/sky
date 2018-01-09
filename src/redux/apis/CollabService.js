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
    withCredentials: false
});

export function getCloud() {
    // return instance.get('/cloud/');
    return instance.get('/getDynamicTopicsCloud');
}

export function getDocList(labelId) {
    return instance.get('/getDynamicTopicInfo/' + labelId);
}

export function getTrendData(labelId) {
    return instance.get('/getDynamicTopicWindows/' + labelId);
}





