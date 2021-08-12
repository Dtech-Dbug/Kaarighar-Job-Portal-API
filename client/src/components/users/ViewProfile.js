import React, { useEffect, useState } from 'react';
import { getUserById } from '../../functions/users';
import { Avatar, Badge, Divider, Col, Row } from 'antd';
import { HiBadgeCheck } from 'react-icons/hi';
const ViewProfile = ({ match }) => {
	const [userProfile, setUserProfile] = useState(null);

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
		getUserById(match.params.id)
			.then((res) => {
				console.log(res.data);
				setUserProfile(res.data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, [match.params.id]);

	return (
		<div>
			{userProfile ? (
				<div>
					<h1 className="flex items-center  justify-center font-bold text-2xl m-6">
						{`${userProfile.firstName}'s Profile`}
					</h1>
					<p className="font-bold text-lg mb-4">Personal</p>
					{userProfile.verified ? (
						<Badge
							count={
								<HiBadgeCheck
									style={{
										background: '#f2f2f2',
										borderRadius: '50%',
										color: '#87d068',
										fontSize: '1.5rem',
									}}
								/>
							}>
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
								{userProfile.avatar
									? userProfile.avatar
									: userProfile.firstName.charAt(0)}
							</Avatar>
						</Badge>
					) : (
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
							{userProfile.avatar
								? userProfile.avatar
								: userProfile.firstName.charAt(0)}
						</Avatar>
					)}
					<Row>
						<Col span={12}>
							<DescriptionItem
								title="First Name"
								content={userProfile.firstName}
							/>
						</Col>
						<Col span={12}>
							<DescriptionItem
								title="Last Name"
								content={userProfile.lastName}
							/>
						</Col>
					</Row>
					<Row>
						<Col span={12}>
							<DescriptionItem
								title="Mobile"
								content={userProfile.mobileNumber}
							/>
						</Col>
						<Col span={12}>
							<DescriptionItem
								title="Email"
								content={userProfile.email}
							/>
						</Col>
					</Row>
					<Row>
						<Col span={12}>
							<DescriptionItem
								title="Birthday"
								content="February 2,1900"
							/>
						</Col>
						<Col span={12}>
							<DescriptionItem
								title="Website"
								content="www.ashishxcode.com"
							/>
						</Col>
					</Row>
					<div>
						<h2 className="font-bold py-2">Bio</h2>
						<p>Make things as simple as possible but no simpler.</p>
					</div>
					<Divider />
					{userProfile.role === 'Recruiter' ? (
						<>
							<p className="font-bold text-lg mb-4">Company</p>
							<Row>
								<Col span={12}>
									<DescriptionItem
										title="Name"
										content={userProfile.companyName}
									/>
								</Col>
								<Col span={12}>
									<DescriptionItem
										title="Regestration No."
										content={userProfile.companyRegNo}
									/>
								</Col>
							</Row>

							<div>
								<h2 className="font-bold py-2">Address</h2>
								<p>{userProfile.address}</p>
							</div>
							<Row>
								<Col span={12}>
									<DescriptionItem
										title="City"
										content={userProfile.city}
									/>
								</Col>
								<Col span={12}>
									<DescriptionItem
										title="Pincode"
										content={userProfile.pinCode}
									/>
								</Col>
							</Row>
						</>
					) : null}
					{userProfile.role === 'Job Seeker' ? (
						<>
							<h1 className="font-bold text-lg mb-4">
								Documents
							</h1>
							<Row>
								<Col span={12}>
									<DescriptionItem
										title="Aadhar Card"
										content={userProfile.aadharCard}
									/>
								</Col>
								<Col span={12}>
									<DescriptionItem
										title="Pan Card"
										content={userProfile.panCard}
									/>
								</Col>
							</Row>
							<Divider />
						</>
					) : null}
					<Divider />
					<p className="font-bold text-lg mb-4">Contact</p>
					<Row>
						<Col span={12}>
							<DescriptionItem
								title="Email"
								content={userProfile.email}
							/>
						</Col>
						<Col span={12}>
							<DescriptionItem
								title="Mobile Number"
								content={userProfile.mobileNumber}
							/>
						</Col>
					</Row>
					<div>
						<h2 className="font-bold py-2">Address:</h2>
						<p>{userProfile.address}</p>
					</div>
					<Row>
						<Col span={12}>
							<DescriptionItem
								title="City"
								content={userProfile.city}
							/>
						</Col>
						<Col span={12}>
							<DescriptionItem
								title="Pincode"
								content={userProfile.pinCode}
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

export default ViewProfile;