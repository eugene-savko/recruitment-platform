import axios, { AxiosError } from 'axios';
import Swal from 'sweetalert2';

const alertError = (serverError: AxiosError) => {
	Swal.fire({
		icon: 'error',
		title: 'Oops...',
		text: `${serverError.response?.data.errorMessage}`,
	});
};

export const fetchListCountries = async (): Promise<any> => {
	try {
		const { data } = await axios({
			method: 'GET',
			url: 'https://api.countrystatecity.in/v1/countries',
			headers: {
				'X-CSCAPI-KEY':
					'bUZxR2VSMGNCS3pXbmV6UXE5TWFHRHo2SVNrUjVVVkFTdllZTU9XZw==',
			},
		});

		return data;
	} catch (error) {
		alertError(error);
		return error;
	}
};

export const fetchListCities = async (ciso: any): Promise<any> => {
	try {
		const { data } = await axios({
			method: 'GET',
			url: `https://api.countrystatecity.in/v1/countries/${ciso}/cities`,
			headers: {
				'X-CSCAPI-KEY':
					'bUZxR2VSMGNCS3pXbmV6UXE5TWFHRHo2SVNrUjVVVkFTdllZTU9XZw==',
			},
		});

		return data;
	} catch (error) {
		alertError(error);
		return error;
	}
};

export const fetchListRecruitersEditor = async (): Promise<any> => {
	try {
		const { data } = await axios({
			method: 'GET',
			url: 'http://localhost:4000/recruitersCompany',
		});
		const listRecruiterEditor = data.map(
			({ id, nameRecruiter, surnameRecruiter }: any) => {
				return {
					idRecruiter: id,
					recruiter: `${nameRecruiter} ${surnameRecruiter}`,
				};
			}
		);
		return listRecruiterEditor;
	} catch (error) {
		alertError(error);
		return error;
	}
};
