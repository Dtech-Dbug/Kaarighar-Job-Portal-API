import React from "react";
import { Table, Space } from "antd";
import "antd/dist/antd.css";
const { Column } = Table;
const TableComponent = ({ data }) => {
	const { role } = data;
	return (
		<Table dataSource={data}>
			<Column title="First Name" dataIndex="firstName" key="firstName" />
			<Column title="Last Name" dataIndex="lastName" key="mobileNumber" />

			<Column title="Mobile No." dataIndex="mobileNumber" key="mobileNumber" />
			<Column title="Address" dataIndex="address" key="address" />

			<Column
				render={(record) => {
					record.role === "Recruiter" ? (
						<Column title="verfied" dataIndex="address" key="address" />
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
						{record.role === "Recruiter" ? (
							<a href="/">Verify</a>
						) : (
							<a href="/">Veiw</a>
						)}
					</Space>
				)}
			/>
		</Table>
	);
};

export default TableComponent;
