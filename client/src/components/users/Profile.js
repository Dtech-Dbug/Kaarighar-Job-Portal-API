import React, { useState, useEffect } from 'react';
import { getCurrentUser } from '../../functions/users';
import { Avatar, Badge, Divider, Col, Row, Image } from 'antd';
import Loading from '../reusableComponents/Loading';
import ItemDescription from '../reusableComponents/ItemDescription';
import {
	HiLocationMarker,
	HiMail,
	HiUser,
	HiOfficeBuilding,
	HiBriefcase,
	HiBookOpen,
	HiDocumentText,
} from 'react-icons/hi';

const Profile = () => {
	const [userProfile, setUserProfile] = useState({});

	useEffect(() => {
		getCurrentUser().then((user) => {
			setUserProfile(user.data);
			console.log('Admin Profile', userProfile);
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
					{/* <Avatar
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
					</Avatar> */}
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
				</div>
			) : (
				<Loading />
			)}
		</div>
	);
};

export default Profile;
