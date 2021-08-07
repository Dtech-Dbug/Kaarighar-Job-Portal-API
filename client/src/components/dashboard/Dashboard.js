import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { UserOutlined, UnorderedListOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import TableComponent from '../reusableComponents/TableComponent';

const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {
	const [collapsed, setCollapsed] = useState(false);

	const onCollapsed = (item) => {
		setCollapsed(item);
	};
	return (
		<Layout style={{ minHeight: '100vh' }}>
			<Sider collapsible collapsed={collapsed} onCollapse={onCollapsed}>
				<div className="logo h-8 m-4">
					<span className="text-lg text-white font-bold">JOBS</span>
				</div>
				<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
					<Menu.Item key="1" icon={<UserOutlined />} title="User">
						<Link to="/users">User</Link>
					</Menu.Item>
					<Menu.Item
						key="2"
						icon={<UnorderedListOutlined />}
						title="category">
						<Link to="/category">Category</Link>
					</Menu.Item>
					<Menu.Item
						key="3"
						icon={<UnorderedListOutlined />}
						title="Jobs">
						<Link to="/jobs">Jobs</Link>
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout className="site-layout">
				<Header
					className="site-layout-background"
					style={{ padding: 0, background: '#fff' }}
				/>
				<Content style={{ margin: '0 16px' }}>
					<TableComponent />
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					Ant Design ©2018 Created by Ant UED
				</Footer>
			</Layout>
		</Layout>
	);
};

export default Dashboard;
