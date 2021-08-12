import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, Space, Button, Tooltip } from 'antd';
import 'antd/dist/antd.css';
const { Column } = Table;
const TableComponent = ({
	data,
	handleRecruiterVerification,
	handleViewProfile,
}) => {
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
					<Space size="large">
						{`${record.firstName} ${record.lastName}`}
					</Space>
				)}
			/>
			<Column
				title="Mobile No."
				dataIndex="mobileNumber"
				key="mobileNumber"
			/>
			<Column
				title="Address"
				render={(record) => (
					<Tooltip
						ellipsis={false}
						placement="topLeft"
						title={record.address}>
						{record.address}
					</Tooltip>
				)}
			/>

			<Column
				title="Action"
				render={(record) => (
					<Space size="middle">
						{record.verified ? (
							<Button type="primary" disabled>
								Verify
							</Button>
						) : (
							<Button
								type="primary"
								onClick={(e) =>
									handleRecruiterVerification(e, record)
								}>
								Verify
							</Button>
						)}
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

export default TableComponent;
