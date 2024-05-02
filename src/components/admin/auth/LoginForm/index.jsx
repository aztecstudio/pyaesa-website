'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from '@/services/auth';
import { useAuth } from '@/hooks/useAuth';
import { Loader } from '@/components';
import { errorHandler } from '@/utils/errors';
import styles from './LoginForm.module.scss';

const initialForm = {
	values: { email: '', password: '' },
	isLoading: false,
};

export const LoginForm = () => {
	const authUser = useAuth();
	const [form, setForm] = useState(initialForm);
	const { values, isLoading } = form;
	const router = useRouter();

	useEffect(() => {
		if (authUser) {
			router.push('/admin/promociones');
		}
	}, [authUser]);

	const handleChange = ({ target }) => {
		setForm({
			...form,
			values: {
				...values,
				[target.name]: target.value,
			},
		});
	};

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			setForm({
				...form,
				isLoading: true,
			});
			const isOk = await signIn(values);
			if (isOk) setForm(initialForm);
		} catch (error) {
			errorHandler(error);
			setForm({
				...form,
				isLoading: false,
			});
		}
	};

	return (
		<form className={styles.Form} onSubmit={handleSubmit}>
			<div className={styles.Form__title}>
				<h3>Inicia sesión</h3>
				<p>para acceder al panel de administración:</p>
			</div>
			<div className={styles.Form__inputGroup}>
				<label htmlFor='idEmail'>Email</label>
				<input
					id='idEmail'
					name='email'
					type='text'
					value={values.email}
					onChange={handleChange}
				/>
			</div>
			<div className={styles.Form__inputGroup}>
				<label htmlFor='idPassword'>Contraseña</label>
				<input
					id='idPassword'
					name='password'
					type='password'
					value={values.password}
					onChange={handleChange}
				/>
			</div>
			<button
				className={styles.Form__loginBtn}
				disabled={!values.email || !values.password || isLoading}
			>
				{!isLoading ? 'Iniciar sesión' : <Loader />}
			</button>
		</form>
	);
};
