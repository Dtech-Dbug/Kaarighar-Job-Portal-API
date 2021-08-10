import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { loadUser } from './actions/auth';
import { LOGOUT } from './actions/types';
import { Link } from 'react-router-dom';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import Routes from './routing/Routes';
import {
	RiDashboardLine,
	RiBriefcase4Line,
	RiUser3Line,
	RiLayout2Fill,
} from 'react-icons/ri';
import Login from './components/auth/Login';
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content, Footer, Sider } = Layout;

function App() {
	const [collapsed, setCollapsed] = useState(false);

	const onCollapsed = (item) => {
		setCollapsed(item);
	};
	useEffect(() => {
		// check for token in LS
		if (localStorage.token) {
			setAuthToken(localStorage.token);
		}
		store.dispatch(loadUser());

		// log user out from all tabs if they log out in one tab
		window.addEventListener('storage', () => {
			if (!localStorage.token) store.dispatch({ type: LOGOUT });
		});
	}, []);

	return (
		<Provider store={store}>
			<Router>
				<Switch>
					<Route path="/login" exact component={Login} />
					<Fragment>
						<Layout style={{ minHeight: '100vh' }}>
							<Sider
								collapsible
								collapsed={collapsed}
								onCollapse={onCollapsed}>
								<div className="logo h-8 m-4">
									<span className="text-lg text-white font-bold">
										JOBS
									</span>
								</div>
								<Menu
									theme="dark"
									defaultSelectedKeys={['1']}
									mode="inline">
									<Menu.Item
										key="1"
										icon={<RiDashboardLine />}
										title="Dashboard">
										<Link to="/dashboard">Dashboard</Link>
									</Menu.Item>
									<Menu.Item
										key="2"
										icon={<RiUser3Line />}
										title="User">
										<Link to="/users">User</Link>
									</Menu.Item>
									<Menu.Item
										key="3"
										icon={<RiLayout2Fill />}
										title="Category">
										<Link to="/category">Category</Link>
									</Menu.Item>
									<Menu.Item
										key="4"
										icon={<RiBriefcase4Line />}
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
									<Route component={Routes} />
								</Content>
								<Footer style={{ textAlign: 'center' }}>
									©2021 Created by{' '}
									<a href="/" target="_blank">
										Team DAA
									</a>
								</Footer>
							</Layout>
						</Layout>
					</Fragment>
				</Switch>
			</Router>
		</Provider>
	);
}

export default App;
