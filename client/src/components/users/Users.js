import React, { useState, useEffect } from 'react';
import { getAllUsers, verifyUser } from '../../functions/users';
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

		const jobSeekers = usersList.filter(
			(user) => user.role === 'Job Seeker',
		);

		const recruiters = usersList.filter(
			(user) => user.role === 'Recruiter',
		);
		setJobSeekerList(jobSeekers);
		setRecruiterList(recruiters);
	}, [usersList.length]);

	const handleVerify = (e, user) => {
		e.preventDefault();
		console.log('Verifing recruiter');
		console.log('USER -> ', user);
		const verifiedState = true;

		const values = {
			userId: user._id,
			verifiedState,
		};

		verifyUser(values).then((res) => {
			console.log(res.data);
			if (res.data.verified === true) {
				alert('Recruiter Verified');
			} else {
				alert(res.data.message);
			}
		});
	};
	return (
		<div>
			<h1 className="text-2xl">Users</h1>
			<br />
			<h2>Recruiters</h2>
			<TableRecruiter data={recruiterList} handleVerify={handleVerify} />

			<h2>Job Seeker</h2>
			<TableJobSeeker data={jobSeekerList} />
		</div>
	);
};

export default Users;
