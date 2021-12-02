import React, { useState, useEffect } from 'react';
import { readCategory, editCategory } from '../../functions/categories';
import { Card, Button, message } from 'antd';
import 'antd/dist/antd.css';
import { RiLayout2Line } from 'react-icons/ri';

const EditCategory = ({ match, history }) => {
	// edit category
	const [newCategory, setNewCategory] = useState({
		title: '',
		file: '',
	});

	useEffect(() => {
		fetchData();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('title', newCategory.title);
		formData.append('file', newCategory.file);

		console.log(newCategory);

		editCategory(match.params.slug, formData)
			.then((response) => {
				if (response.status === 200) {
					message.success('Category Edited Successfully');
					history.push('/category');
				}
			})
			.catch((error) => {
				message.error('Error Editing Category');
			});
	};

	const handleChange = (e) => {
		setNewCategory({ ...newCategory, [e.target.title]: e.target.value });
	};

	const handlefile = (e) => {
		setNewCategory({ ...newCategory, file: e.target.files[0] });
	};

	// const { title } = category;

	const fetchData = () =>
		readCategory(match.params.slug).then((res) => {
			setNewCategory(res.data);
		});

	return (
		<>
			<h1 className="flex items-center font-bold text-lg py-1.5">
				<RiLayout2Line />
				&nbsp;Edit Category : {match.params.slug}
			</h1>
			<br />
			<Card className="w-full">
				<form
					onSubmit={handleSubmit}
					method="post"
					enctype="multipart/form-data"
				>
					<input
						placeholder="Enter Category Name."
						className="w-full p-2 my-2 border-2"
						type="text"
						title="title"
						value={newCategory.title}
						onChange={handleChange}
					/>
					<input
						type="file"
						accept=".png, .jpg, .jpeg"
						title="file"
						className="w-full my-2"
						onChange={handlefile}
					></input>
					<Button
						type="primary"
						htmlType="submit"
						size="large"
						className=" my-4"
					>
						Edit Category
					</Button>
				</form>
			</Card>
		</>
	);
};

export default EditCategory;
