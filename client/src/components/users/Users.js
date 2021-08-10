import React, { useState, useEffect } from 'react';
import { getUsers, verifyRecruiter } from '../../actions/users';
import PropTypes from 'prop-types';
import TableJobSeeker from '../reusableComponents/TableJobSeeker';
import TableRecruiter from '../reusableComponents/TableRecruiter';
import { connect } from 'react-redux';
import { RiUser3Line } from 'react-icons/ri';
const Users = ({
	getUsers,
	verifyRecruiter,
	user: { users, verified, loading },
}) => {
	const [jobSeekerList, setJobSeekerList] = useState([]);
	const [recruiterList, setRecruiterList] = useState([]);

	const handleRecruiterVerification = (e, recruiter) => {
		e.preventDefault();
		const verifiedState = true;
		verifyRecruiter(recruiter._id, verifiedState);
		console.log('Verified', verified);
	};

	useEffect(() => {
		getUsers();
		if (users) {
			setJobSeekerList(
				users.filter((user) => user.role === 'Job Seeker'),
			);
			setRecruiterList(users.filter((user) => user.role === 'Recruiter'));
		}
	}, [getUsers]);

	return (
		<>
			<h1 className="flex items-center text-lg py-1.5">
				<RiUser3Line /> Users
			</h1>
			<br />
			{loading ? (
				<div className="text-center">
					<h1>Loading...</h1>
				</div>
			) : (
				<div>
					<h2>Recruiters</h2>
					<TableRecruiter
						data={recruiterList}
						handleRecruiterVerification={
							handleRecruiterVerification
						}
					/>

					<h2>Job Seeker</h2>
					<TableJobSeeker data={jobSeekerList} />
				</div>
			)}
		</>
	);
};

Users.propTypes = {
	getUsers: PropTypes.func.isRequired,
	verifyRecruiter: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	user: state.user,
});

export default connect(mapStateToProps, { getUsers, verifyRecruiter })(Users);
