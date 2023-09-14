import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: '75fed32510ac126799c5e562169e3dc2',
        language: 'ko-KR',
    },
});

export default instance;
