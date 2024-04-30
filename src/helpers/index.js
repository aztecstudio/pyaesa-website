import { getAllCategories, getMainCategories } from '@/services/database';

export const filterCategoryData = async categories => {
	let categoriesToShow = [];
	let currentCategory = {};
	let hasChildren = true;

	if (categories?.length > 0) {
		const allCategories = await getAllCategories();

		const parentCategory = allCategories.find(
			category => category.handle === categories[categories.length - 1],
		);
		const { id, children, name, description } = parentCategory;

		categoriesToShow = allCategories.filter(category => category.parent === id);
		currentCategory = { id, name, description };
		hasChildren = children.length > 0;
	} else {
		categoriesToShow = await getMainCategories();
	}

	return { categoriesToShow, currentCategory, hasChildren };
};
