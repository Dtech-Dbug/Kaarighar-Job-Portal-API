import React, { useState, useEffect } from 'react';
import { Table, Space, Button } from 'antd';
import { Link } from 'react-router-dom';
import { readCategory } from '../../functions/categories';

const ViewCategory = ({ match, history }) => {
	const [categoryList, setCategoryList] = useState();

	useEffect(() => {
		fetchData();
	}, []);
	const fetchData = async () => {
		try {
			readCategory(match.params.slug).then((res) => {
				console.log('RES -->', res.data);
				setCategoryList(res.data);
				console.log('Category:', categoryList);
			});
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="w-full my-4">
			{/* display category details */}
			{categoryList && (
				<div>
					<h1>Title: {categoryList.title}</h1>
					<img
						src={categoryList.images.filePath}
						alt={`${categoryList.title} file`}
					/>
				</div>
			)}
		</div>
	);
};

export default ViewCategory;
