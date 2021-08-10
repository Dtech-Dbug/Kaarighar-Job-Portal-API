import React, { useState, useEffect } from 'react';
import { getUsers } from '../../actions/users';
import PropTypes from 'prop-types';
import TableJobSeeker from '../reusableComponents/TableJobSeeker';
import TableRecruiter from '../reusableComponents/TableRecruiter';
import { connect } from 'react-redux';

const Users = ({ getUsers, user: { users, loading } }) => {
	const [jobSeekerList, setJobSeekerList] = useState([]);
	const [recruiterList, setRecruiterList] = useState([]);

	useEffect(() => {
		getUsers();
		setJobSeekerList(users.filter((user) => user.role === 'Job Seeker'));
		setRecruiterList(users.filter((user) => user.role === 'Recruiter'));
	}, [getUsers]);

	return (
		<div>
			<h1 className="text-2xl">Users</h1>
			<br />
			<div className="text-center">
				<i className="fa fa-spinner fa-pulse fa-3x fa-fw" />
			</div>
			{loading ? (
				<div className="text-center">
					<h1>Loading...</h1>
				</div>
			) : (
				<div>
					<h2>Recruiters</h2>
					<TableRecruiter data={recruiterList} />

					<h2>Job Seeker</h2>
					<TableJobSeeker data={jobSeekerList} />
				</div>
			)}
		</div>
	);
};

Users.propTypes = {
	getUsers: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	user: state.user,
});

export default connect(mapStateToProps, { getUsers })(Users);
