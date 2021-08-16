import React from 'react';
import { Layout, Avatar, Input, Menu, Dropdown } from 'antd';
import 'antd/dist/antd.css';
import { BiSearchAlt } from 'react-icons/bi';

const NavHeader = ({ user }) => {
	const { Header } = Layout;
	const { Search } = Input;

	const onSearch = (value) => console.log(value);
	const suffix = (
		<BiSearchAlt
			style={{
				fontSize: 16,
				color: '#1890ff',
			}}
		/>
	);

	const menu = (
		<Menu>
			<Menu.Item key="0">
				<a href="https://www.antgroup.com">Logout</a>
			</Menu.Item>
		</Menu>
	);
	return (
		<Header className="flex justify-between items-center p-4 bg-white">
			<Search
				placeholder="Search..."
				onSearch={onSearch}
				enterButton="Search"
				className="mr-8 max-w-md"
				suffix={suffix}
			/>
			<Dropdown overlay={menu} trigger={['click']}>
				<Avatar gap={1} size="8" onClick={(e) => e.preventDefault()}>
					A
				</Avatar>
			</Dropdown>
		</Header>
	);
};

export default NavHeader;
