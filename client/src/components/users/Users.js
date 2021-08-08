import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../../functions/users';
import TableJobSeeker from '../reusableComponents/TableJobSeeker';
import TableRecruiter from '../reusableComponents/TableRecruiter';

const Users = () => {
	const [usersList, setUsersList] = useState([]);
	const [jobSeekerList, setJobSeekerList] = useState([]);
	const [recruiterList, setRecruiterList] = useState([]);

	useEffect(() => {
		getAllUsers(localStorage.getItem('token')).then((res) =>
			setUsersList(res.data),
		);

		console.log(usersList);

		const jobSeekers = usersList.filter(
			(user) => user.role === 'Job Seeker',
		);

		const recruiters = usersList.filter(
			(user) => user.role === 'Recruiter',
		);
		setJobSeekerList(jobSeekers);
		setRecruiterList(recruiters);
	}, [usersList.length]);

	return (
		<div>
			<h1 className="text-5xl text-center font-bold">Users</h1>

			<h2 className="text-2xl">Recruiters</h2>
			<TableRecruiter data={recruiterList} />

			<h2 className="text-2xl">Job Seeker</h2>
			<TableJobSeeker data={jobSeekerList} />
		</div>
	);
};

export default Users;
