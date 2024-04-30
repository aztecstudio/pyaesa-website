'use client';
import { useEffect, useState } from 'react';
import styles from './LoginForm.module.scss';
import { signIn } from '@/services/auth';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { Loader } from '@/components';

const initialForm = {
	values: { email: '', password: '' },
	isLoading: false,
};

export const LoginForm = () => {
	const { token } = useAuth();
	const [form, setForm] = useState(initialForm);
	const { values, isLoading } = form;
	const router = useRouter();

	useEffect(() => {
		if (token) {
			router.push('/admin/promociones');
		}
	}, [token]);

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
		setForm({
			...form,
			isLoading: true,
		});
		try {
			await signIn(values, token);
		} catch (error) {
			console.error(error);
			setForm({
				...form,
				isLoading: true,
			});
			toast.error('Credenciales inválidas!');
		} finally {
			setForm(initialForm);
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
