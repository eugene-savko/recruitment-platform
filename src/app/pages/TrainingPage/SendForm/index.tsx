import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { fetchSpecialitiesWithoutAny } from 'app/API/getSpecialityWithoutAny';
import { IListItemSelect } from 'app/pages/AdminPage/Profile/types';
import { URL_INTERNSHIP_REQUEST } from 'app/API/urls';
import { API } from 'app/API/axios';
import { FrontendLandingContext } from 'app/contexts/FrontendLandingContext';
import { IFormFields } from './types';

// style components
import { Form, Note, Title, FormWrapper, Submit } from './components';

// components
import { TraineeForm } from './TraineeForm';
import { FileLoader } from './FileLoader';
import { Agreements } from './Agreements';
import { FieldTimeCall } from './TraineeForm/FieldTimeCall';

// data
import { listEnglishLevel } from './data/listEnglishLevel';
import { listPrimarySkill } from './data/listPrimarySkill';
import { Modal } from './Modal';

export const SendForm: React.FunctionComponent = () => {
	const { internshipValue } = useContext(FrontendLandingContext);
	const [stateCountry, setCountry] = useState('');
	const [stateCity, setCity] = useState('');
	const [fileName, setFileName] = useState('');
	const [primarySkill, setPrimarySkill] = useState<Array<IListItemSelect>>(
		listPrimarySkill
	);
	useEffect(() => {
		const fetchPrimarySkills = async () => {
			const data = await fetchSpecialitiesWithoutAny();
			setPrimarySkill(data);
		};
		fetchPrimarySkills();
	}, []);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IFormFields>();

	const [showModal, setShowModal] = useState(false);
	const [emailTrainee, setEmailTrainee] = useState('');

	const handleModal = (status: boolean) => {
		setShowModal(status);
	};

	const onSubmit = useCallback(
		({
			englishLevel,
			firstName,
			lastName,
			email,
			country,
			city,
			phone,
			textArea,
			timeForCall,
			pSkill,
		}: Record<string, string>) => {
			const objectDto = {
				specialityId: String(pSkill),
				englishLevel,
				cv:
					'https://drive.google.com/file/d/1nUKSLwq5zh_GhVKQg6o1FalLrG2Bwuvc/view?usp=sharing',
				internshipId: String(internshipValue),
				timeIntervalId: timeForCall,
				country,
				city,
				userDto: {
					firstName,
					lastName,
					email,
					phone,
					otherInformation: textArea,
				},
			};
			console.log(objectDto);
			try {
				const postFormData = async (): Promise<void> => {
					API({
						method: 'post',
						url: URL_INTERNSHIP_REQUEST,
						data: JSON.stringify(objectDto),
						headers: {
							'Content-Type': 'application/json; charset=utf-8',
						},
					});
				};
				postFormData();

				// reset fields fileLoader, select country and city
				setFileName('');
				setCountry('');
				setCity('');
				setFileName('');
				setShowModal(true);
				setEmailTrainee(email);
				setTimeout(() => setShowModal(false), 5000);

				// reset form
				reset();
			} catch (e) {
				throw new Error(e.message);
			}
		},
		[internshipValue]
	);

	return (
		<FormWrapper>
			<Title>Submit your application</Title>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<TraineeForm
					register={register}
					englishLevel={listEnglishLevel}
					primarySkill={primarySkill}
					errorMessage={errors}
					setCountry={setCountry}
					setCity={setCity}
					country={stateCountry}
					city={stateCity}
				/>
				<Note size={12}>* Fields marked with * are required.</Note>
				<FieldTimeCall register={register} />
				<FileLoader
					register={register}
					errors={errors}
					setFileName={setFileName}
					fileName={fileName}
				/>
				<Agreements register={register} errors={errors} />
				<Submit>Submit</Submit>
				<Modal
					showModal={showModal}
					handleModal={handleModal}
					emailTrainee={emailTrainee}
				/>
			</Form>
		</FormWrapper>
	);
};
