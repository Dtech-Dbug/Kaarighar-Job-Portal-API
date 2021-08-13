import React, { useState, useEffect } from 'react';
import { getAllJobs } from '../../functions/jobs';
import TableJob from '../reusableComponents/TableJob';
const Jobs = () => {
	const [jobsList, setJobsList] = useState([]);

	useEffect(() => {
		getAllJobs(localStorage.getItem('token')).then((res) => {
			console.log('Res Data ->', res.data);
			setJobsList(res.data);
		});
	}, []);
	return (
		<div>
			{jobsList ? <TableJob data={jobsList} /> : <div>Loading...</div>}
		</div>
	);
};

export default Jobs;
