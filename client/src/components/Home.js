import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';

const Home = () => {
	return (
		<div className="flex flex-col justify-center items-center h-screen">
			<p>Welcome to </p>
			<h1 className="text-4xl font-bold mb-4">Kaarighar</h1>
			<Button type="primary">
				<a href="/dashboard">Visit Dashboard</a>
			</Button>
		</div>
	);
};

export default Home;
