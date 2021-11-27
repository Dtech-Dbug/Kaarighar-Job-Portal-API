import React, { useState, useEffect } from 'react';
import { getCurrentUser } from '../../functions/users';
import { Avatar, Col, Row, Image } from 'antd';
import Loading from '../reusableComponents/Loading';
import ItemDescription from '../reusableComponents/ItemDescription';
import { HiLocationMarker, HiUser } from 'react-icons/hi';

const Profile = () => {
	const [userProfile, setUserProfile] = useState(null);

	useEffect(() => {
		getCurrentUser()
			.then((res) => {
				setUserProfile(res.data);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}, []);

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
					{userProfile.firstName ? (
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
					) : null}
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
				</div>
			) : (
				<Loading />
			)}
		</div>
	);
};

export default Profile;
