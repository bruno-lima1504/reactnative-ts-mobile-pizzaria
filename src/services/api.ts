import axios from 'axios';

const api  = axios.create({
    // baseURL:  'http:localhost:3333'
    baseURL: 'http://192.168.15.58:3333'
})

export { api };