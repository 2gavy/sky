import axios from 'axios';
import * as config from '../../../appConfig';
var querystring = require('querystring');

const instance = axios.create({
    baseURL: config.USER_HOST_ADDR,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    responseType: 'json',
    withCredentials: true
});

export function loginUser(userid, password) {
    return instance.post('/login', querystring.stringify({
        userid: userid,
        password: password
    }));
}

export function getUsers(name = 'all', userid = 0, page = 1, limit = 20) {
    console.log(name);
    return instance.get('/users', {
      params : {
          username: name,
          userid: userid,
          page: page,
          limit: limit,
      }
    });
}

export function createUser(userid, password, isAdmin = false) {
    return instance.post('/user', querystring.stringify({
        userid: userid,
        password: password,
        isAdmin: isAdmin,
    }));
}

export function getSelf() {
    return instance.get('/user');
}

export function updateSelf(obj) {
    return instance.put('/user/' + obj.userid, querystring.stringify(obj));
}

export function updateUser(userid, obj) {
    return instance.put('/user/' + userid, querystring.stringify(obj));
}

export function deleteUser(userid) {
    return instance.delete('/user/' + userid);
}

export function logoutUser() {
    return instance.get('/logout');
}

export function updateSearchPreference(userid, obj) {
    return instance.put('/userpref/' + userid, querystring.stringify(obj));
}

export function getSearchPreference(userid) {
    return instance.get('/userpref/' + userid);
}
