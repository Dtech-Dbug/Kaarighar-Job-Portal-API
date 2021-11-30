import React, { useState } from 'react';
import { Card, Button, message } from 'antd';
import 'antd/dist/antd.css';
import { createCategory } from '../../functions/categories';

const CategoryForm = () => {
	const [newCategory, setNewCategory] = useState({
		title: '',
		file: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('file', newCategory.file);
		formData.append('title', newCategory.title);

		console.log(newCategory);

		createCategory(formData).then((res) => {
			if (res.status === 200) {
				message.success('Category created successfully');
				window.location.reload();
			} else {
				message.error('Category creation failed');
			}
		});
	};

	const handleChange = (e) => {
		setNewCategory({ ...newCategory, [e.target.title]: e.target.value });
	};

	const handlefile = (e) => {
		setNewCategory({ ...newCategory, file: e.target.files[0] });
	};

	return (
		<Card className="w-full">
			<form onSubmit={handleSubmit} method="post" enctype="multipart/form-data">
				<input
					placeholder="Enter Category Name."
					className="w-full p-2 my-2 border-2"
					type="text"
					title="title"
					onChange={handleChange}
				/>
				<input
					type="file"
					accept=".png, .jpg, .jpeg"
					title="file"
					className="w-full my-2"
					onChange={handlefile}
				></input>
				<Button type="primary" htmlType="submit" size="large" className=" my-4">
					Add Category
				</Button>
			</form>
		</Card>
	);
};

export default CategoryForm;
