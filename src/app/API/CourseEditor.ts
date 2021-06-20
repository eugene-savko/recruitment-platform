import axios, { AxiosError } from 'axios';
import Swal from 'sweetalert2';
import { IDefaultCourseInput } from '../pages/AdminPage/CourseEditor/index';
import { CourseDetailsEditor } from '../pages/AdminPage/CourseDetailsEditor/CourseDetailsEditor';

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

export const createCourse = async (
	dataCourse: IDefaultCourseInput
): Promise<any> => {
	console.log(dataCourse);
	try {
		const { data } = await axios({
			method: 'POST',
			url: 'http://localhost:4000/listCourses',
			withCredentials: true,
			data: dataCourse,
			headers: { 'Content-Type': 'application/json' },
		});

		console.log('create course', data);
		return data;
	} catch (error) {
		alertError(error);
		return error;
	}
};

export const fetchListCourses = async (): Promise<any> => {
	try {
		const { data } = await axios({
			url: 'http://localhost:4000/courses',
			method: 'GET',
			withCredentials: true,
		});
		return data;
	} catch (error) {
		alertError(error);
		return error;
	}
};

export const fetchCurrentCourse = async (
	idCourse: string
): Promise<IDefaultCourseInput> => {
	try {
		const { data } = await axios({
			url: `http://localhost:4000/courses/${idCourse}/listCourses`,
			method: 'GET',
			withCredentials: true,
		});
		const [transformData] = data;
		return transformData;
	} catch (error) {
		alertError(error);
		return error;
	}
};

export const updateCourse = async (
	idCourse: any,
	updatedData: any
): Promise<any> => {
	try {
		const { data } = await axios({
			url: `http://localhost:4000/listCourses/${idCourse}`,
			method: 'PUT',
			withCredentials: true,
			data: updatedData,
			headers: { 'Content-Type': 'application/json' },
		});
		return data;
	} catch (error) {
		alertError(error);
		return error;
	}
};

export const deleteCourseDescription = async (
	idDeletedCourse: any
): Promise<any> => {
	try {
		const { data } = await axios({
			url: `http://localhost:4000/listCourses/${idDeletedCourse}`,
			method: 'DELETE',
			withCredentials: true,
		});
		return data;
	} catch (error) {
		alertError(error);
		return error;
	}
};

export const deleteNameCourse = async (idDeledCourse: any): Promise<any> => {
	try {
		const { data } = await axios({
			url: `http://localhost:4000/courses/${idDeledCourse}`,
			method: 'DELETE',
			withCredentials: true,
		});
		console.log(data);
		return data;
	} catch (error) {
		alertError(error);
		return error;
	}
};

export const fetchCourse = async (idCourse: any): Promise<any> => {
	try {
		const {
			data: { courseEditorDetails },
		} = await axios({
			url: `http://localhost:4000/listCourses/${idCourse}`,
			method: 'GET',
			withCredentials: true,
		});
		return courseEditorDetails;
	} catch (error) {
		alertError(error);
		return error;
	}
};
