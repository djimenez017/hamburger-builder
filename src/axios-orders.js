import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-28dd4.firebaseio.com/'
});

export default instance;