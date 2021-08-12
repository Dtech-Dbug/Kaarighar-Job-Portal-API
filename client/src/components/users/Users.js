import React, { useState, useEffect } from 'react';
import { getAllUsers, verifyUser } from '../../functions/users';
import TableJobSeeker from '../reusableComponents/TableJobSeeker';
import TableRecruiter from '../reusableComponents/TableRecruiter';
import { RiUser3Line } from 'react-icons/ri';
const Users = () => {
	const [jobSeekerList, setJobSeekerList] = useState([]);
	const [recruiterList, setRecruiterList] = useState([]);

	let [usersList, setUsersList] = useState([]);
	useEffect(() => {
		getAllUsers(localStorage.getItem('token')).then((res) => {
			console.log('Res Data ->', res.data);
			setUsersList(res.data);
			console.log('Users Data ->', usersList);
					
		const jobSeekers = res.data.filter(
			(user) => user.role === 'Job Seeker',
		);

		const recruiters = res.data.filter(
			(user) => user.role === 'Recruiter',
		);
		setJobSeekerList(jobSeekers);
		setRecruiterList(recruiters);
		});


	}, []);

	const handleVerify = (e, user) => {
		e.preventDefault();
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
		<>
			<h1 className="flex items-center font-bold text-lg py-1.5">
				<RiUser3Line /> Users
			</h1>
			<br />
			<div>
				<h2 className="font-bold py-1.5">Recruiters</h2>
				<TableRecruiter
					data={recruiterList}
					handleRecruiterVerification={handleVerify}
				/>

				<h2 className="font-bold py-1.5">Job Seeker</h2>
				<TableJobSeeker data={jobSeekerList} />
			</div>
		</>
	);
};

export default Users;
