import React, { useState, useEffect } from 'react';
import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';
import {
	getAllCategories,
	deleteCategory,
} from '../../functions/categories';

import { RiLayout2Line } from 'react-icons/ri';

const Category = ({ match, history }) => {
	const [categoryList, setCategoryList] = useState([]);

	useEffect(() => {
		fetchCategories();
	}, []);

	const fetchCategories = () =>
		getAllCategories()
			.then((categories) => {
				setCategoryList(categories.data);
			})
			.catch((err) => alert(err.message));

	const handleCategoryDelete = (slug) => {
		let confirm = window.confirm('Are you sure , you want to delete?');
		if (confirm) {
			deleteCategory(slug)
				.then((res) => {
					fetchCategories();
				})
				.catch((err) => alert('Error while deleting in frontend', err.message));
		}
	};

	return (
		<>
			<h1 className="flex items-center font-bold text-lg py-1.5">
				<RiLayout2Line />
				&nbsp;Category
			</h1>
			<CategoryForm />
			<CategoryList
				categoryList={categoryList}
				handleCategoryDelete={handleCategoryDelete}
			/>
		</>
	);
};

export default Category;
