import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import 'antd/dist/antd.css';
import { readCategory, getAllCategories } from '../../functions/categories';
import { RiLayout2Line } from 'react-icons/ri';
import { createSubCategory } from '../../functions/categories';
import ImageHolder from '../reusableComponents/ImageHolder';
const { Column } = Table;

const ViewCategory = ({ match, history }) => {
	const [page, setPage] = useState(1);
	const [subCategoryList, setSubCategoryList] = useState([]);
	const [category, setCategory] = useState();
	const [subCategory, setSubCategory] = useState({
		title: '',
		parent: '',
	});

	const fetchData = async () => {
		try {
			readCategory(match.params.slug).then((res) => {
				setCategory(res.data);
				console.log(category);
			});
		} catch (error) {
			console.log(error);
		}
	};

	const fetchSubCategoriesByID = async () => {
		try {
			getAllCategories(category._id).then((res) => {
				setSubCategoryList(res.data);
				console.log(subCategoryList);
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
		fetchSubCategoriesByID();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		setSubCategory({ ...subCategory, parent: category._id });

		const formData = new FormData();
		formData.append('title', subCategory.title);
		formData.append('parent', subCategory.parent);

		console.log(subCategory);

		createSubCategory(formData)
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleChange = (e) => {
		setSubCategory({ ...subCategory, [e.target.title]: e.target.value });
	};
	return (
		<div className="w-full my-4">
			<h1 className="flex items-center font-bold text-lg py-1.5">
				<RiLayout2Line />
				&nbsp;Category : {category && category.title}
			</h1>
			{category && (
				<div className="flex justify-between">
					<div className="flex flex-col">
						<h1 className="font-bold text-md py-1.5">
							Category Name: {category.title}
						</h1>
						<p>Category ID : {category._id}</p>
					</div>
					<ImageHolder FILE_NAME={`category/${category.images.fileName}`} />
				</div>
			)}

			<div>
				<h1 className="flex items-center font-bold text-lg py-1.5">
					<RiLayout2Line />
					&nbsp; Sub Category{' '}
				</h1>
				<form
					onSubmit={handleSubmit}
					method="post"
					enctype="multipart/form-data"
				>
					<input
						placeholder="Enter Sub Category Name."
						className="w-full p-2 my-2 border-2"
						type="text"
						title="title"
						value={subCategory.title}
						onChange={handleChange}
					/>
					<Button
						type="primary"
						htmlType="submit"
						size="large"
						className=" my-4"
					>
						Add Sub Category
					</Button>
				</form>
			</div>

			<div className="w-full my-4">
				<Table
					dataSource={subCategoryList}
					pagination={{
						onChange(current) {
							setPage(current);
						},
					}}
				>
					<Column
						title="No"
						key="no"
						render={(value, item, index) => (page - 1) * 10 + index}
					/>
					<Column title="Title" dataIndex="title" key="title" />

					<Column
						title="Created At."
						render={(record) => {
							return <span>{record.createdAt.substring(0, 10)}</span>;
						}}
					/>
				</Table>
			</div>
		</div>
	);
};

export default ViewCategory;
