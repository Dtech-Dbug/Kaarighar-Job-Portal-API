import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Space, Button } from 'antd';
import 'antd/dist/antd.css';
const { Column } = Table;
const TableJobSeeker = ({ data, handleViewProfile }) => {
	const [page, setPage] = useState(1);
	return (
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
			<Column
				title="Name"
				render={(record) => (
					<Space size="middle">
						{`${record.firstName} ${record.lastName}`}
					</Space>
				)}
			/>

			<Column
				title="Mobile No."
				dataIndex="mobileNumber"
				key="mobileNumber"
			/>
			<Column title="Address" dataIndex="address" key="address" />

			<Column
				render={(record) => {
					record.role === 'Recruiter' ? (
						<Column
							title="verfied"
							dataIndex="address"
							key="address"
						/>
					) : (
						<Column title="hmm" dataIndex="address" key="address" />
					);
				}}
			/>
			{}

			{}
			<Column
				title="Action"
				render={(record) => (
					<Space size="middle">
						<Button
							type="dashed"
							onClick={(e) => {
								handleViewProfile(e, record);
							}}>
							<Link to={`/user/${record._id}`}> View</Link>
						</Button>
					</Space>
				)}
			/>
		</Table>
	);
};

export default TableJobSeeker;
