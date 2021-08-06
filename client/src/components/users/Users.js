import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../../functions/users';

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

	const handleVerifyUser = (e) => {
		e.preventDefault();
		console.log('User verified');
	};
	return (
		<div className="text-left w-screen">
			<h1 className="text-5xl text-center font-bold">Users</h1>

			<div className="w-min">
				<h2 className="text-2xl">Recruiters</h2>
				<div className="flex flex-col">
					<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-6">
						<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
							<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
								<table className="min-w-full divide-y divide-gray-200">
									<thead className="bg-gray-50">
										<tr>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Name
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Mobile no.
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Status
											</th>
											<th
												scope="col"
												className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
												Verify
											</th>
										</tr>
									</thead>
									<tbody className="bg-white divide-y divide-gray-200">
										{recruiterList.map((user) => (
											<tr key={user._id}>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="flex items-center">
														<div className="flex-shrink-0 h-10 w-10">
															<img
																className="h-10 w-10 rounded-full"
																src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
																alt=""
															/>
														</div>
														<div className="ml-4">
															<div className="text-sm font-medium text-gray-900">
																{user.firstName}{' '}
																{user.lastName}
															</div>
															<div className="text-sm text-gray-500">
																{user.email}
															</div>
														</div>
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm text-gray-900">
														{user.mobileNumber}
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													{user.verified ? (
														<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
															Verified
														</span>
													) : (
														<span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
															Not Verified
														</span>
													)}
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<button
														className="rounded-full bg-purple-500 text-white py-1 px-4 uppercase"
														onClick={
															handleVerifyUser
														}>
														Verify
													</button>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-min">
				<h2 className="text-2xl">Job Seeker</h2>
				<div className="flex flex-col ">
					<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-6">
						<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
							<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
								<table className="min-w-full divide-y divide-gray-200">
									<thead className="bg-gray-50">
										<tr>
											<th
												scope="col"
												className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">
												Name
											</th>
											<th
												scope="col"
												className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
												Mobile no.
											</th>
											<th
												scope="col"
												className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider">
												City
											</th>
										</tr>
									</thead>
									<tbody className="bg-white divide-y divide-gray-200">
										{jobSeekerList.map((user) => (
											<tr key={user._id}>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="flex items-center">
														<div className="flex-shrink-0 h-10 w-10">
															<img
																className="h-10 w-10 rounded-full"
																src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
																alt=""
															/>
														</div>
														<div className="ml-4">
															<div className="text-sm font-medium text-gray-900">
																{user.firstName}{' '}
																{user.lastName}
															</div>
															<div className="text-sm text-gray-500">
																{user.email}
															</div>
														</div>
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm text-gray-900">
														{user.mobileNumber}
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm text-gray-900">
														{user.pinCode}
													</div>
													<div className="text-sm text-gray-500">
														{user.city}
													</div>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Users;
