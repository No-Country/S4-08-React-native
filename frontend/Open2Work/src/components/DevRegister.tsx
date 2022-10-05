import React, { useEffect } from 'react';
import { View, Text, Keyboard } from 'react-native';
import { Button } from 'react-native-paper';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { apiDevelopers } from '../axios/apiDevelopers';
import { MyInput } from '../components/MyInput';
import Roles from '../components/Roles';
import Seniority from '../components/Seniority';
import Availability from '../components/Availability';
import Timezones from '../components/Timezones';
import Languages from '../components/Languages';
import { logUser } from '../redux/features/user/userSlice';

interface FormValues {
	languages: string[],
	timezone: string,
	role: string,
	seniority: string,
	availability: string,
	github: string,
	linkedin: string,
	web: string,
}

const DevRegister = () => {

	const formValues = useAppSelector(state => state.register);
	
	const userValues = useAppSelector(state => state.user);

	useEffect(() => {
	  console.log('redux', JSON.stringify(userValues, null, 2))
	}, [userValues])
	
	const dispatch = useAppDispatch();

	const submitPOST = async (values: FormValues) => {

		const form = {
			...formValues,
			role: values.role,
			avatar: "avatar",
			social: {
				linkedin: values.linkedin,
				portfolio: values.web,
				github: values.github
			},
			info: {
				time_availability: values.availability,
				time_zone: values.timezone,
				experience: values.seniority,
				language: values.languages
			}
		}

		try {
			// const resp = await apiDevelopers.post('/register', JSON.stringify(form));
			const resp = await apiDevelopers.post('/register', form);
			console.log(resp.data.msg);
			dispatch( logUser( resp.data.dev ))
		} catch (error) {
			console.log('error', JSON.stringify(error, null, 2))
		}



		// axios
		//   .get('http://192.168.1.43:8080/')
		//   .then(res => console.log(res.status))
		//   .catch(err => console.log(err.message));
		/* .post('http://localhost:8080/dev/register', {...devForm, ...values})
		  .then(res => console.log(res))
		  .catch(err => console.log(err)); */
	};

	return (
		<>
			<Formik
				validationSchema={Yup.object({
					languages: Yup.array().min(1, 'Provide at least 1 option'),
					timezone: Yup.string().required('Required'),
					role: Yup.string().required('Required'),
					seniority: Yup.string().required('Required'),
					availability: Yup.string().required('Required'),
					github: Yup.string().url('Invalid URL format').required('Required'),
					linkedin: Yup.string().url('Invalid URL format').required('Required'),
					web: Yup.string().url('Invalid URL format'),
				})}
				initialValues={{
					languages: [],
					timezone: '',
					role: '',
					seniority: '',
					availability: '',
					github: 'http://a.com',
					linkedin: 'http://a.com',
					web: 'http://a.com',
				}}
				onSubmit={values => submitPOST(values)}>

				{({
					handleChange,
					handleSubmit,
					values,
					errors,
					touched,
					setFieldValue,
				}) => (
					<View
						style={{
							minHeight: '100%',
							marginBottom: 25,
							width: '90%',
						}}>
						<Languages
							onPress={setFieldValue}
							error={!!errors.languages && !!touched.languages}
						/>
						{errors.languages && touched.languages && (
							<Text style={{ color: 'red' }}>
								<ErrorMessage name="languages" />
							</Text>
						)}
						<Timezones
							onPress={setFieldValue}
							error={!!errors.timezone && !!touched.timezone}
						/>
						{errors.timezone && touched.timezone && (
							<Text style={{ color: 'red' }}>
								<ErrorMessage name="timezone" />
							</Text>
						)}
						<Roles
							onPress={setFieldValue}
							error={!!errors.role && !!touched.role}
						/>
						{errors.role && touched.role && (
							<Text style={{ color: 'red' }}>
								<ErrorMessage name="role" />
							</Text>
						)}
						<Seniority
							onPress={setFieldValue}
							error={!!errors.seniority && !!touched.seniority}
						/>
						{errors.seniority && touched.seniority && (
							<Text style={{ color: 'red' }}>
								<ErrorMessage name="seniority" />
							</Text>
						)}
						<Availability
							onPress={setFieldValue}
							error={!!errors.availability && !!touched.availability}
						/>
						{errors.availability && touched.availability && (
							<Text style={{ color: 'red' }}>
								<ErrorMessage name="availability" />
							</Text>
						)}

						<MyInput
							iconName="logo-github"
							label={'GitHub'}
							value={values.github}
							error={!!errors.github && !!touched.github}
							onChangeText={handleChange('github')}
						/>
						{errors.github && touched.github && (
							<Text style={{ color: 'red' }}>
								<ErrorMessage name="github" />
							</Text>
						)}
						<MyInput
							iconName="logo-linkedin"
							label={'Linkedin'}
							value={values.linkedin}
							error={!!errors.linkedin && !!touched.linkedin}
							onChangeText={handleChange('linkedin')}
						/>
						{errors.linkedin && touched.linkedin && (
							<Text style={{ color: 'red' }}>
								<ErrorMessage name="linkedin" />
							</Text>
						)}
						<MyInput
							iconName="globe-outline"
							label={'Portfolio / Web'}
							value={values.web}
							error={!!errors.web && !!touched.web}
							onChangeText={handleChange('web')}
						/>
						{errors.web && touched.web && (
							<Text style={{ color: 'red' }}>
								<ErrorMessage name="web" />
							</Text>
						)}

						<Button
							onPress={handleSubmit}
							mode="contained"
							style={{
								width: '60%',
								alignSelf: 'center',
								marginTop: 20,
								borderRadius: 40,
							}}>
							<Text
								style={{
									fontSize: 25,
								}}>
								SUBMIT
							</Text>
						</Button>
					</View>
				)}
			</Formik>
			<Text style={{color:'red', zIndex: 999}}>Hoola</Text>
			{
				<Text style={{color: 'white', zIndex: 9999, elevation: 9999}}>
					{JSON.stringify(userValues, null, 4)}
					hola
				</Text>
			}
		</>
	);
};

export default DevRegister;
