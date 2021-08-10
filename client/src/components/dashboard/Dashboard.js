import React from 'react';
import {
	RiDashboardLine,
	RiBriefcase4Line,
	RiUser3Line,
	RiLayout2Line,
	RiShoppingCart2Line,
} from 'react-icons/ri';
import 'antd/dist/antd.css';
import Card from '../reusableComponents/Card';
const Dashboard = () => {
	return (
		<>
			<h1 className="flex items-center text-lg py-1.5">
				<RiDashboardLine /> Dashboard
			</h1>
			<div className="grid md:grid-flow-col gap-4">
				<div>
					<Card icon={<RiUser3Line />} title={'User'} value={5005} />
				</div>
				<div>
					<Card
						icon={<RiLayout2Line />}
						title={'Category'}
						value={60}
					/>
				</div>
				<div>
					<Card
						icon={<RiBriefcase4Line />}
						title={'Jobs'}
						value={240}
					/>
				</div>
				<div>
					<Card
						icon={<RiShoppingCart2Line />}
						title={'Market Place'}
						value={100}
					/>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
