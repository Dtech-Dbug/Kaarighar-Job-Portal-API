import React from 'react';
import { Layout, Avatar, Input, Menu, Dropdown, Button } from 'antd';
import 'antd/dist/antd.css';
import { UserOutlined } from '@ant-design/icons';
import { BiSearchAlt } from 'react-icons/bi';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
const NavHeader = ({ user, logout, auth: { isAuthenticated, loading } }) => {
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
				<Button danger type="text" onClick={logout}>
					Logout
				</Button>
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
				<Avatar size="large" icon={<UserOutlined />} />	
			</Dropdown>
		</Header>
	);
};

NavHeader.prototype = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(NavHeader);
