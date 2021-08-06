import React from 'react';
import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';

const Category = () => {
	return (
		<div className="w-full flex flex-col items-center bg-gray-50  lg:px-8">
			<CategoryForm />
			<CategoryList />
		</div>
	);
};

export default Category;
