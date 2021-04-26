import axios from 'axios';

const baseUrl = 'https://hacker-news.firebaseio.com/v0/';

export const fetchData = (url: string) => {
    return axios.get(`${baseUrl}${url}`)
    .then(result => result.data)
    .catch(err => err)
};

export const fetchItem = (id: number) => {
    return axios.get(`${baseUrl}item/${id}/.json`)
    .then(result => result.data)
    .catch(err => err)
};