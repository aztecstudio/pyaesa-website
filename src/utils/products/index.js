export const getRandomProducts = (array, numberOfProducts) => {
	const result = [];

	while (result.length < numberOfProducts) {
		const randomIndex = Math.floor(Math.random() * array.length);
		if (result.indexOf(array[randomIndex]) === -1) {
			result.push(array[randomIndex]);
		}
	}

	return result;
};
