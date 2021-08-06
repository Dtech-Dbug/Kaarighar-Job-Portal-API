import React from 'react';
import CategoryForm from './CategoryForm';
import CategoryList from './CategoryList';

const Category = () => {
	const handleCategoryChange = (e) => {
		console.log(e.target.value);
	};
	return (
		<div className="w-full flex flex-col items-center bg-gray-50  lg:px-8">
			<CategoryForm handleCategoryChange={handleCategoryChange} />
			<CategoryList />
		</div>
	);
};

export default Category;
