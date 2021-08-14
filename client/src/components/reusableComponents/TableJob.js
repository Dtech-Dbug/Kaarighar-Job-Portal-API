import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Space, Button } from 'antd';
import 'antd/dist/antd.css';

const TableJob = ({ data }) => {
	const [page, setPage] = useState(1);
	const { Column } = Table;

	return (
		<div>
			<Table
				dataSource={data}
				pagination={{
					onChange(current) {
						setPage(current);
					},
				}}>
				<Column
					title="No"
					key="no"
					render={(value, item, index) => (page - 1) * 10 + index}
				/>
				<Column title="Name" dataIndex="name" key="name" />

				<Column
					title="Description"
					dataIndex="description"
					key="description"
				/>
				<Column title="No Role." dataIndex="noRole" key="noRole" />
				<Column
					title="Category"
					key="category"
					render={(record) => {
						return record.parent ? record.parent.title : 'NA';
					}}
				/>
				<Column
					title="Recruiter"
					render={(record) => {
						return record.recruiter ? (
							<Link to={`/user/${record.recruiter._id}`}>
								{`${record.recruiter.firstName} ${record.recruiter.lastName}`}
							</Link>
						) : (
							'NA'
						);
					}}
				/>
				<Column
					title="Action"
					render={(record) => (
						<Space size="middle">
							<Button type="dashed">
								<Link to={`/job/${record._id}`}> View</Link>
							</Button>
						</Space>
					)}
				/>
			</Table>
		</div>
	);
};

export default TableJob;
