/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { IFormInputs } from 'app/components/Auth/types/AuthTypes';

const useMocoServer = () => {
	const [dataFromServer, setDataFromServer] = useState();
	const [dataFromUser, setDataFromUser] = useState<IFormInputs | null>(null);
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
