import React from 'react';
import { Link } from 'react-router-dom';
const Dashboard = () => {
	return (
		<div>
			<h1>Dashboard</h1>
			<div className=" ">
				<ul className="flex p-1 justify-center items-center">
					<li className="mx-1 text-lg">
						<Link to="/users">Users</Link>
					</li>
					<li className="mx-1 text-lg">
						<Link to="/jobs">Jobs</Link>
					</li>
					<li className="mx-1 text-lg">
						<Link to="/category">Category</Link>
					</li>
					<li className="mx-1 text-lg">
						<Link to="/profile">Profile</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;
