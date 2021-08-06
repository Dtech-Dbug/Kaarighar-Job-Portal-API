import React, { useState, useEffect } from "react";
import CategoryForm from "./CategoryForm";
import CategoryList from "./CategoryList";
import { createCategory, getAllCategories } from "../../functions/categories";

const Category = () => {
	const [formData, setFormData] = useState("");
	const [categoryList, setCategoryList] = useState([]);

	useEffect(() => {
		getAllCategories()
			.then((categories) => {
				setCategoryList(categories.data);
			})
			.catch((err) => alert(err.message));
	}, []);

	console.log(categoryList);
	const handleCategoryChange = (e) => {
		// console.log(e.target.value);
		setFormData(e.target.value);
		console.log("Form data", formData);
	};

	const handleCategoryFormSubmit = (e, values) => {
		e.preventDefault();
		console.log("HELLOW WORLD");
		console.log(formData);

		//making req to BE to create category
		createCategory(formData)
			.then((res) => {
				// alert("CATEGORY CREATED");
				window.location.reload();
			})
			.catch((err) => console.log(err.message));
	};

	return (
		<div className="w-full flex flex-col items-center bg-gray-50  lg:px-8">
			<CategoryForm
				handleCategoryChange={handleCategoryChange}
				handleCategoryFormSubmit={handleCategoryFormSubmit}
			/>
			<CategoryList categoryList={categoryList} />
		</div>
	);
};

export default Category;
