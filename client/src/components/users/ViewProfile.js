import React, { useEffect, useState } from 'react';
import { getUserById } from '../../functions/users';
import { Avatar, Badge, Divider, Col, Row, Image } from 'antd';
import Loading from '../reusableComponents/Loading';
import ItemDescription from '../reusableComponents/ItemDescription';
import {
	HiBadgeCheck,
	HiLocationMarker,
	HiMail,
	HiUser,
	HiOfficeBuilding,
	HiBriefcase,
	HiBookOpen,
	HiDocumentText,
} from 'react-icons/hi';

const ViewProfile = ({ match }) => {
	const [userProfile, setUserProfile] = useState(null);

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

					<div className="flex my-4">
						<HiUser
							style={{
								fontSize: '1.5rem',
							}}
						/>
						<p className="font-bold flex text-lg ml-4">Personal</p>
					</div>
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
							}
						>
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
								gap={1}
							>
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
							gap={1}
						>
							{userProfile.avatar
								? userProfile.avatar
								: userProfile.firstName.charAt(0)}
						</Avatar>
					)}
					<Row>
						<Col span={12}>
							<ItemDescription
								title="First Name"
								content={userProfile.firstName}
							/>
						</Col>
						<Col span={12}>
							<ItemDescription
								title="Last Name"
								content={userProfile.lastName}
							/>
						</Col>
					</Row>
					<Row>
						<Col span={12}>
							<ItemDescription
								title="Mobile"
								content={userProfile.mobileNumber}
							/>
						</Col>
						<Col span={12}>
							<ItemDescription title="Email" content={userProfile.email} />
						</Col>
					</Row>
					<Row>
						<Col span={12}>
							<ItemDescription title="Birthday" content="February 2,1900" />
						</Col>
						<Col span={12}>
							<a href="/" target="_blank">
								<ItemDescription
									title="Website"
									content="www.ashishxcode.com"
								/>
							</a>
						</Col>
					</Row>
					<ItemDescription title="About" content={userProfile.profile.about} />
					<div className="flex my-4">
						<HiMail
							style={{
								fontSize: '1.5rem',
							}}
						/>
						<p className="font-bold flex text-lg ml-4">Contact</p>
					</div>
					<Row>
						<Col span={12}>
							<ItemDescription title="Email" content={userProfile.email} />
						</Col>
						<Col span={12}>
							<ItemDescription
								title="Mobile Number"
								content={userProfile.mobileNumber}
							/>
						</Col>
					</Row>
					<div className="flex my-4">
						<HiLocationMarker
							style={{
								fontSize: '1.5rem',
							}}
						/>
						<p className="font-bold flex text-lg ml-4">Address</p>
					</div>
					{userProfile.address.map((item, index) => {
						return (
							<div>
								<Row>
									<p className="font-bold mt-2">{item.addressType}</p>
									<Col span={24}>
										<ItemDescription
											title="Address"
											content={`${item.addressLine1} ${item.addressLine2}`}
										/>
									</Col>
								</Row>
								<Row>
									<Col span={12}>
										<ItemDescription title="City" content={item.city} />
									</Col>
									<Col span={12}>
										<ItemDescription title="Pincode" content={item.pincode} />
									</Col>
								</Row>
								<Row>
									<Col span={12}>
										<ItemDescription title="State" content={item.state} />
									</Col>
									<Col span={12}>
										<ItemDescription title="Country" content={item.country} />
									</Col>
								</Row>
								<hr />
							</div>
						);
					})}

					{userProfile.role === 'Job Seeker' && (
						<Row>
							<Col span={12}>
								<div className="flex my-4">
									<HiBookOpen
										style={{
											fontSize: '1.5rem',
										}}
									/>
									<p className="font-bold flex text-lg ml-4">Eduction</p>
								</div>
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
													<ItemDescription title="School" content={school} />
												</Col>
												<Col span={12}>
													<ItemDescription title="Degree" content={degree} />
												</Col>
											</Row>
											<Row>
												<Col span={12}>
													<ItemDescription title="From" content={from} />
												</Col>
												<Col span={12}>
													<ItemDescription
														title="To"
														content={current ? 'Now' : to}
													/>
												</Col>
											</Row>
											<Row>
												<ItemDescription
													title="Field of Study"
													content={fieldofstudy}
												/>
											</Row>
											<Row>
												<ItemDescription
													title="Description"
													content={description}
												/>
											</Row>
										</div>
									)
								)}
							</Col>
							<Col span={12}>
								<div className="flex my-4">
									<HiBriefcase
										style={{
											fontSize: '1.5rem',
										}}
									/>
									<p className="font-bold flex text-lg ml-4">Experience</p>
								</div>
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
													<ItemDescription title="Title" content={title} />
												</Col>
												<Col span={12}>
													<ItemDescription title="Company" content={company} />
												</Col>
											</Row>
											<Row>
												<Col span={12}>
													<ItemDescription title="From" content={from} />
												</Col>
												<Col span={12}>
													<ItemDescription
														title="To"
														content={current ? 'Now' : to}
													/>
												</Col>
											</Row>
											<Row>
												<ItemDescription title="Location" content={location} />
											</Row>
											<Row>
												<ItemDescription
													title="Description"
													content={description}
												/>
											</Row>
										</div>
									)
								)}
							</Col>
						</Row>
					)}
					<Divider />
					{userProfile.role === 'Recruiter' ? (
						<>
							<div className="flex my-4">
								<HiOfficeBuilding
									style={{
										fontSize: '1.5rem',
									}}
								/>
								<p className="font-bold flex text-lg ml-4">Company</p>
							</div>
							<Row>
								<Col span={12}>
									<ItemDescription
										title="Name"
										content={userProfile.company.companyName}
									/>
								</Col>
								<Col span={12}>
									<ItemDescription
										title="Regestration No."
										content={userProfile.company.companyRegNo}
									/>
								</Col>
							</Row>
							<Row>
								<Col span={12}>
									<ItemDescription
										title="Address"
										content={userProfile.company.companyAddress}
									/>
								</Col>
								<Col span={12}>
									<ItemDescription
										title="Contact"
										content={userProfile.company.companyContact}
									/>
								</Col>
							</Row>
						</>
					) : null}
					{userProfile.role === 'Job Seeker' ? (
						<>
							<div className="flex my-4">
								<HiDocumentText
									style={{
										fontSize: '1.5rem',
									}}
								/>
								<p className="font-bold flex text-lg ml-4">Documents</p>
							</div>
							<Row>
								<Col span={12}>
									<ItemDescription
										title="Aadhar Card"
										content={userProfile.aadharCard.aadharNumber}
									/>
									<Image
										width={300}
										src={userProfile.aadharCard.aadharImage}
										alt="aadhar"
									/>
								</Col>
								<Col span={12}>
									<ItemDescription
										title="Pan Card"
										content={userProfile.panCard.panNumber}
									/>

									<Image
										width={300}
										src={userProfile.panCard.panImage}
										alt="aadhar"
									/>
								</Col>
							</Row>

							<Divider />
						</>
					) : null}
					<Divider />
				</div>
			) : (
				<Loading />
			)}
		</div>
	);
};

export default ViewProfile;
