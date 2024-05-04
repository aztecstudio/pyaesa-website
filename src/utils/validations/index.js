export const validateContactForm = values => {
	const errors = {};
	const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
	const regexPhone = /^[1-9][0-9]*$/;

	if (!values.name) {
		errors.name = 'Campo requerido!';
	}

	if (!values.phone) {
		errors.phone = 'Campo requerido!';
	} else if (!regexPhone.test(values.phone)) {
		errors.phone = 'Ingresa un teléfono válido!';
	}

	if (!values.email) {
		errors.email = 'Campo requerido!';
	} else if (!regexEmail.test(values.email)) {
		errors.email = 'Ingresa un email válido!';
	}

	if (!values.subject) {
		errors.subject = 'Campo requerido!';
	}

	if (!values.message) {
		errors.message = 'Campo requerido!';
	}

	return errors;
};

export const validateLoginForm = values => {
	const errors = {};

	if (!values.email) {
		errors.email = 'Campo requerido!';
	}

	if (!values.password) {
		errors.password = 'Campo requerido!';
	}

	return errors;
};
