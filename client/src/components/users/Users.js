import React, { useState, useEffect } from "react";
import { verifyUser, getAllUsers } from "../../functions/users";

const Users = () => {
	const [usersList, setUsersList] = useState([]);
	const [jobSeekerList, setJobSeekerList] = useState([]);
	const [recruiterList, setRecruiterList] = useState([]);

	useEffect(() => {
		const test = () => {
			getAllUsers(localStorage.getItem("token")).then((res) =>
				setUsersList(res.data)
			);

			console.log(usersList);
			if (usersList.length) {
				const jobSeekers = usersList.filter(
					(user) => user.role === "Job Seeker"
				);

				const recruiters = usersList.filter(
					(user) => user.role === "Recruiter"
				);
				setJobSeekerList(jobSeekers);
				setRecruiterList(recruiters);
			}
		};

		return () => test();
	}, [usersList]);
	return (
		<div className="text-left">
			<h1 className="text-xl">Users</h1>
			<div>
				{jobSeekerList.length
					? console.log("Job Skeers =>", jobSeekerList)
					: "null"}
			</div>
			<div>
				{recruiterList.length
					? console.log("Recruiters =>", recruiterList)
					: "null"}
			</div>
		</div>
	);
};

export default Users;
