import { API } from './axios';

export const postLoginData = async () => {
	const url = '/login';
	const data = await API({
		method: 'post',
		url,
		headers: {
			'Access-Control-Expose-Headers': 'Set-Cookie',
			'Content-Type': 'application/x-www-form-urlencoded',
			withCredentials: true,
		},
		data: new URLSearchParams({
			username: 'alice.blue@gmail.com',
			password: '12345',
		}),
	});
	console.log(data);
};
