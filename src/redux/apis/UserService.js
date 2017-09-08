import axios from 'axios';
import * as config from '../../../appConfig';

const instance = axios.create({
    baseURL: config.USER_HOST_ADDR,
    headers: {
        'Content-Type': 'application/json'
    },
    responseType: 'json',
    withCredentials: true
});

export function loginUser(userid, password) {
    return instance.post('/user/login', {
        userid: userid,
        password: password
    });
}

export function getUsers(name = '', userid = '', page = 1, limit = 20) {
    return instance.get('/users', {
        name: name,
        userid: userid,
        page: page,
        limit: limit,
    });
}

export function createUser(userid, password, isAdmin = false) {
    return instance.post('/user', {
        userid: userid,
        password: password,
        isAdmin: isAdmin,
    });
}

export function getSelf() {
    return instance.get('/user');
}

export function updateSelf(obj) {
    return instance.put('/user', obj);
}

export function updateUser(userid, obj) {
    return instance.put('/user/' + userid, obj);
}

export function deleteUser(userid) {
    return instance.delete('/user/' + userid);
}

export function logoutUser() {
    return instance.delete('/user/logout');
}