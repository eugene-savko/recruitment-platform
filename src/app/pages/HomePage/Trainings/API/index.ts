import axios from 'axios';

const API = axios.create({
	baseURL: 'https://recruitment-platform.herokuapp.com/',
});
export default API;
