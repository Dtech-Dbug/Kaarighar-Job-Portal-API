import React, { useEffect, useState } from 'react';
import { getUserById } from '../../functions/users';
import { Avatar, Badge, Divider, Col, Row ,Image} from 'antd';
import { HiBadgeCheck } from 'react-icons/hi';
const ViewProfile = ({ match }) => {
	const [userProfile, setUserProfile] = useState(null);
	// const [profileInfo, setProfileInfo] = useState(null);
	const DescriptionItem = ({ title, content }) => (
		<div className="flex items-center">
			<h2 className="font-bold py-2 pr-1">
				{title ? (
					<span>{title}:</span>
				) : (
					<span className="text-red-500"> No Data</span>
				)}
			</h2>
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
							<a href="/" target="_blank">
								<DescriptionItem
									title="Website"
									content="www.ashishxcode.com"
								/>
							</a>
						</Col>
					</Row>
					<DescriptionItem
						title="About"
						content={userProfile.profile.about}
					/>
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
					<p className="font-bold text-lg mb-4">Address</p>
					{
						userProfile.address.map((item, index) => {
							return (
								<div>
									<Row>
									<Col span={24}>
										<DescriptionItem
											title="Address"
											content={`${item.addressLine1} ${item.addressLine2}`}
										/>
									</Col>
							</Row>
					<Row>
						<Col span={12}>
							<DescriptionItem
								title="City"
								content={item.city}
							/>
						</Col>
						<Col span={12}>
							<DescriptionItem
								title="Zipcode"
								content={item.zipCode}
							/>
						</Col>
					</Row>
					<Row>
						<Col span={12}>
							<DescriptionItem
								title="State"
								content={item.state}
							/>
						</Col>
						<Col span={12}>
							<DescriptionItem
								title="Country"
								content={item.country}
							/>
						</Col>
					</Row>
								</div>
								
								)}
							)

					}

					{userProfile.role === 'Job Seeker' && (
						<Row>
							<Col span={12}>
								<h2 className="font-bold text-lg py-2 pr-1">
									Education
								</h2>
								{userProfile.profile.education.map(
									({
										school,
										_id,
										degree,
										fieldofstudy,
										description,
										from,
										current,
										to,
									}) => (
										<div key={_id}>
											<Row>
												<Col span={12}>
													<DescriptionItem
														title="School"
														content={school}
													/>
												</Col>
												<Col span={12}>
													<DescriptionItem
														title="Degree"
														content={degree}
													/>
												</Col>
											</Row>
											<Row>
												<Col span={12}>
													<DescriptionItem
														title="From"
														content={from}
													/>
												</Col>
												<Col span={12}>
													<DescriptionItem
														title="To"
														content={
															current ? 'Now' : to
														}
													/>
												</Col>
											</Row>
											<Row>
												<DescriptionItem
													title="Field of Study"
													content={fieldofstudy}
												/>
											</Row>
											<Row>
												<DescriptionItem
													title="Description"
													content={description}
												/>
											</Row>
										</div>
									),
								)}
							</Col>
							<Col span={12}>
								<h2 className="font-bold text-lg py-2 pr-1">
									Experience
								</h2>
								{userProfile.profile.experience.map(
									({
										company,
										_id,
										title,
										location,
										description,
										from,
										current,
										to,
									}) => (
										<div key={_id}>
											<Row>
												<Col span={12}>
													<DescriptionItem
														title="Title"
														content={title}
													/>
												</Col>
												<Col span={12}>
													<DescriptionItem
														title="Company"
														content={company}
													/>
												</Col>
											</Row>
											<Row>
												<Col span={12}>
													<DescriptionItem
														title="From"
														content={from}
													/>
												</Col>
												<Col span={12}>
													<DescriptionItem
														title="To"
														content={
															current ? 'Now' : to
														}
													/>
												</Col>
											</Row>
											<Row>
												<DescriptionItem
													title="Location"
													content={location}
												/>
											</Row>
											<Row>
												<DescriptionItem
													title="Description"
													content={description}
												/>
											</Row>
										</div>
									),
								)}
							</Col>
						</Row>
					)}
					<Divider />
					{userProfile.role === 'Recruiter' ? (
						<>
							<p className="font-bold text-lg mb-4">Company</p>
							<Row>
								<Col span={12}>
									<DescriptionItem
										title="Name"
										content={
											userProfile.company.companyName
										}
									/>
								</Col>
								<Col span={12}>
									<DescriptionItem
										title="Regestration No."
										content={
											userProfile.company.companyRegNo
										}
									/>
								</Col>
							</Row>
							<Row>
								<Col span={12}>
									<DescriptionItem
										title="Address"
										content={
											userProfile.company.companyAddress
										}
									/>
								</Col>
								<Col span={12}>
									<DescriptionItem
										title="Contact"
										content={
											userProfile.company.companyContact
										}
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
										content={
											userProfile.aadharCard.aadharNumber
										}
									/>
								<Image
      width={300} src={userProfile.aadharCard.aadharImage} alt="aadhar" />
								</Col>
								<Col span={12}>
									<DescriptionItem
										title="Pan Card"
										content={userProfile.panCard.panNumber}
									/>

										<Image
      width={300} src={userProfile.panCard.panImage} alt="aadhar" />
								</Col>
							</Row>

							<Divider />
						</>
					) : null}
					<Divider />
					
				</div>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
};

export default ViewProfile;
