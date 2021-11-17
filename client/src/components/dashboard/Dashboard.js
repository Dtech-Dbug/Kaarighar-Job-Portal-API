import React ,{ PureComponent }from 'react';
import { Link } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import {
	RiDashboardLine,
	RiBriefcase4Line,
	RiUser3Line,
	RiLayout2Line,
} from 'react-icons/ri';
import 'antd/dist/antd.css';
import Card from '../reusableComponents/Card';
const Dashboard = () => {
	const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

	return (
		<>
			<h1 className="flex items-center font-bold text-lg py-1.5">
				<RiDashboardLine />
				&nbsp;Dashboard
			</h1>
			<div className="grid md:grid-flow-col gap-4">
				<div>
					<Link className="/users">
						<Card icon={<RiUser3Line />} title={'User'} value={5005} />
					</Link>
				</div>
				<div>
					<Link to="/category">
						<Card
						icon={<RiLayout2Line />}
						title={'Category'}
						value={60}
					/>
					</Link>
				</div>
				<div>
					<Link to="/jobs">
						<Card
						icon={<RiBriefcase4Line />}
						title={'Jobs'}
						value={240}
					/>
					</Link>
				</div>
			
       
			</div>
			<div className="md:container flex md:mx-auto shadow-md bg-white  rounded-md px-14 py-8">
				
				<div>
					<h1 className="font-bold text-lg py-1.5">New Job Created</h1>
					<LineChart width={500} height={300} data={data}>
										  <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
									</LineChart>
				</div>
					<div>
						<h1 className="font-bold text-lg py-1.5">New Registration</h1>
						<LineChart width={500} height={300} data={data}>
											  <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
										</LineChart>
					</div>
				</div>
		</>
	);
};

export default Dashboard;
