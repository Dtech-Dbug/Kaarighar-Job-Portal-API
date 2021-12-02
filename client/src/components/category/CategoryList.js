import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Space, Button } from 'antd';
import 'antd/dist/antd.css';
const { Column } = Table;

const CategoryList = ({ categoryList, handleCategoryDelete }) => {
	const [page, setPage] = useState(1);
	return (
		<div className="w-full my-4">
			<Table
				dataSource={categoryList}
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

				<Column
					title="Action"
					render={(record) => (
						<Space size="middle">
							<Button type="primary">
								<Link to={`/category/${record.slug}`}>View</Link>
							</Button>
							<Button type="dashed">
								<Link to={`/category/${record.slug}`}>Edit</Link>
							</Button>
							<Button
								danger
								type="dashed"
								onClick={() => handleCategoryDelete(record.slug)}
							>
								Delete
							</Button>
						</Space>
					)}
				/>
			</Table>
		</div>
	);
};

export default CategoryList;
