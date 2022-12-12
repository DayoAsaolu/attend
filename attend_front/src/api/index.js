import axios from 'axios';

// const url = 'https://attendance-dayo.herokuapp.com/posts';
const url = 'http://localhost:9000/posts';


export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
