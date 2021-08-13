import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
const ForgotPassword = () => {
	const [formValue, setFormValue] = useState({
		userID: '',
		password: '',
		confirmPassword: '',
	});

	const handleClick = (e) => {
		e.preventDefault();
		if (formValue.password !== formValue.confirmPassword) {
			alert('Password does not mactch try again');
			return;
		} else {
			alert('Password changed successfully');
		}
	};

	const handleChange = (e) => {
		setFormValue({
			...formValue,
			[e.target.name]: e.target.value,
		});
	};
	return (
		<div className="w-full flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<img
						className="mx-auto h-12 w-auto"
						src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
						alt="Workflow"
					/>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Reset Password
					</h2>
				</div>
				<Form layout="vertical">
					<Form.Item
						label="User ID"
						required
						tooltip="User ID is a required field">
						<Input
							name="userID"
							value={formValue.userID}
							onChange={handleChange}
							rules={[
								{
									required: true,
									message: 'Please enter your user id!',
								},
							]}
						/>
					</Form.Item>

					<Form.Item
						label="Password"
						required
						tooltip="Password is a required field">
						<Input.Password
							name="password"
							value={formValue.password || ''}
							onChange={handleChange}
							rules={[
								{
									required: true,
									message: 'Please enter your password!',
								},
							]}
						/>
					</Form.Item>
					<Form.Item
						label="Confirm Password"
						required
						tooltip="Confirm Password is a required field">
						<Input.Password
							name="confirmPassword"
							value={formValue.confirmPassword || ''}
							onChange={handleChange}
							rules={[
								{
									required: true,
									message:
										'Please enter your confirm password!',
								},
							]}
						/>
					</Form.Item>

					<Form.Item>
						<Button
							className="w-full"
							type="primary"
							htmlType="submit"
							onClick={handleClick}>
							Reset Passowrd
						</Button>
					</Form.Item>
					<Form.Item className="text-center text-blue-700 font-medium	">
						<Link to="/login">Back to login?</Link>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

export default ForgotPassword;
