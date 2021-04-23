import axios from 'axios';

const API = axios.create({
	baseURL: 'https://recruitment-platform.herokuapp.com/api/',
});
export default API;
