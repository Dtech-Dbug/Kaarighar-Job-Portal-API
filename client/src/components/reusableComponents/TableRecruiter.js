import React from 'react';
import { Table, Space, Button } from 'antd';
import 'antd/dist/antd.css';
const { Column } = Table;
const TableComponent = ({ data, handleVerify }) => {
	return (
		<Table dataSource={data}>
			<Column title="First Name" dataIndex="firstName" key="firstName" />
			<Column title="Last Name" dataIndex="lastName" key="mobileNumber" />

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
					<Space size="middle" className="text-center">
						{record.verified ? (
							<Button type="primary" disabled>
								Verified
							</Button>
						) : (
							<Button
								type="primary"
								onClick={() => handleVerify(record)}>
								&nbsp;Verify&nbsp;
							</Button>
						)}
					</Space>
				)}
			/>
		</Table>
	);
};

export default TableComponent;
