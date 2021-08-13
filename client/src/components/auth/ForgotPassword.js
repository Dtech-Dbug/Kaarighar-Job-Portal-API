import React, { useState } from 'react';
import { forgotPassword } from '../../functions/userAuth';
import { Link, Redirect } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';

const ForgotPassword = () => {
	const [confirmPassword, setConfirmPassword] = useState('');
	const [formValue, setFormValue] = useState({
		mobileNumber: '',
		password: '',
	});
	const handleClick = (e) => {
		e.preventDefault();
		if (formValue.password === confirmPassword) {
			forgotPassword(formValue).then(() => {
				alert('Password has been reset');
				<Redirect to="/login" />;
			});
		} else {
			alert('Password does not mactch try again');
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
						label="Mobile Number"
						required
						tooltip="Mobile Number is a required field">
						<Input
							name="mobileNumber"
							value={formValue.mobileNumber || ''}
							onChange={handleChange}
							placeholder="Enter Mobile Number"
							rules={[
								{
									required: true,
									message: 'Please enter your mobile number!',
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
							placeholder="Enter password"
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
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							placeholder="Enter confirm password"
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
