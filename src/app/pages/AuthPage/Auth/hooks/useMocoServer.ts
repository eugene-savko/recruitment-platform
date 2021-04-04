import { useState } from 'react';
import { IFormInput } from 'app/pages/AuthPage/Auth/types';

const useMocoServer = () => {
	// eslint-disable-next-line no-unused-vars
	const [dataFromServer, setDataFromServer] = useState();
	// eslint-disable-next-line no-unused-vars
	const [dataFromUser, setDataFromUser] = useState<IFormInput | null>(null);
	const [isAuth, setIsAuth] = useState(false);

	const mocaServer = () =>
		new Promise<string>((resolved) => {
			setTimeout(
				() =>
					resolved(
						JSON.stringify({
							status: 200,
							data: {
								user: {
									name: 'test',
									password: 'testPassword',
									role: 'admin',
								},
							},
						})
					),
				2500
			);
		});

	const getServerValue = async () => {
		const value = await mocaServer();
		return JSON.parse(value);
	};

	const handleLogin = async () => {
		const value = await getServerValue();
		setDataFromServer(value);
		setIsAuth(true);
		if (value.status <= 200) console.log('FETCHING DONE');
		console.log(isAuth);
	};

	return { setDataFromUser, isAuth, setIsAuth, handleLogin };
};

export default useMocoServer;
