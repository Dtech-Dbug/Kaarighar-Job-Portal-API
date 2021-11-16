import React, { useEffect, useState } from 'react';
import { Avatar, Button, Divider, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { getJobInfo } from '../../functions/jobs';
const ViewJob = ({ match }) => {
	const [jobInfo, setJobInfo] = useState(null);

	const DescriptionItem = ({ title, content }) => (
		<div className="flex items-center">
			<p className="font-bold py-2 pr-1">
				{title ? (
					<span>{title}:</span>
				) : (
					<span className="text-red-500"> No Data</span>
				)}
			</p>
			{content ? (
				<span>{content}</span>
			) : (
				<span className="text-red-500"> No Data</span>
			)}
		</div>
	);

	useEffect(() => {
		getJobInfo(match.params.id)
			.then((res) => {
				console.log(res.data);
				setJobInfo(res.data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, [match.params.id]);

	console.log('JOB INFO ->', jobInfo);
	return (
		<div>
			{jobInfo ? (
				<div>
					<h1 className="flex items-center  justify-center font-bold text-2xl m-6">
						Job Infomation
					</h1>
					<p className="font-bold text-lg mb-4">Job</p>
					<Avatar
						className="bg-blue-900 align-middle mb-4"
						size={{
							xs: 24,
							sm: 32,
							md: 40,
							lg: 64,
							xl: 70,
							xxl: 90,
						}}
						shape="square"
						gap={1}>
						{jobInfo.avatar
							? jobInfo.avatar
							: jobInfo.name.charAt(0)}
					</Avatar>
					<Row>
						<Col span={12}>
							<DescriptionItem
								title="Name"
								content={jobInfo.name}
							/>
						</Col>
						<Col span={12}>
								<DescriptionItem
									title="Category"
									content={jobInfo.parent.title}
								/>
						</Col>
					</Row>
					<Row>
						<Col span={12}>
							<DescriptionItem
								title="No of Roles."
								content={jobInfo.noRole}
							/>
						</Col>
					</Row>

					<div>
						<DescriptionItem
							title="Description"
							content={jobInfo.description}
						/>
					</div>
					<Divider />
					<p className="font-bold text-lg mb-4">Company</p>
					<Row>
						<Col span={12}>
							<DescriptionItem
								title="Name"
								content={jobInfo.recruiter.company.companyName}
							/>
						</Col>
						<Col span={12}>
							<DescriptionItem
								title="Regestration No"
								content={jobInfo.recruiter.company.companyRegNo}
							/>
						</Col>
					</Row>
					<Row>
						<Col span={24}>
							<DescriptionItem
								title="Address"
								content={`${jobInfo.recruiter.address.addressLine1} ${jobInfo.recruiter.address.addressLine2}`}
							/>
						</Col>
					</Row>
					<Row>
						<Col span={12}>
							<DescriptionItem
								title="City"
								content={jobInfo.recruiter.address.city}
							/>
						</Col>
						<Col span={12}>
							<DescriptionItem
								title="Zipcode"
								content={jobInfo.recruiter.address.zipCode}
							/>
						</Col>
					</Row>
					<Row>
						<Col span={12}>
							<DescriptionItem
								title="State"
								content={jobInfo.recruiter.address.state}
							/>
						</Col>
						<Col span={12}>
							<DescriptionItem
								title="Country"
								content={jobInfo.recruiter.address.country}
							/>
						</Col>
					</Row>
					<Divider />

					<Row>
						<Col span={20}>
							<p className="font-bold text-lg mb-4">Recruiter</p>
						</Col>
						<Col span={4}>
							<Button type="primary">
								<Link to={`/user/${jobInfo.recruiter._id}`}>
									View Profile
								</Link>
							</Button>
						</Col>
					</Row>

					<Avatar
						className="bg-blue-900 align-middle mb-4"
						size={{
							xs: 24,
							sm: 32,
							md: 40,
							lg: 64,
							xl: 70,
							xxl: 90,
						}}
						shape="square"
						gap={1}>
						{jobInfo.recruiter.firstName.charAt(0)}
					</Avatar>

					<Row>
						<Col span={12}>
							<DescriptionItem
								title="First Name"
								content={jobInfo.recruiter.firstName}
							/>
						</Col>
						<Col span={12}>
							<DescriptionItem
								title="Last Name"
								content={jobInfo.recruiter.lastName}
							/>
						</Col>
					</Row>

					<Row>
						<Col span={12}>
							<DescriptionItem
								title="Email"
								content={jobInfo.recruiter.email}
							/>
						</Col>
						<Col span={12}>
							<DescriptionItem
								title="Mobile Number"
								content={jobInfo.recruiter.mobileNumber}
							/>
						</Col>
					</Row>
				</div>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
};

export default ViewJob;
