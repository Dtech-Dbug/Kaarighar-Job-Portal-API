import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';

const Login = ({ login, isAuthenticated }) => {
	const [formValue, setFormValue] = useState({
		mobileNumber: '1234567890',
		password: 'pass1234',
	});
	const onFinish = (values) => {
		console.log('Success:', values);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};
	const handleClick = (e) => {
		e.preventDefault();
		login(formValue);
	};

	const handleChange = (e) => {
		setFormValue({ ...formValue, [e.target.name]: e.target.value });
	};

	if (isAuthenticated) {
		return <Redirect to="/dashboard" />;
	}
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
						Sign in to your account
					</h2>
				</div>
				{/* <form className="mt-8 space-y-6" action="#" method="POST">
					<input type="hidden" name="remember" defaultValue="true" />
					<div className="rounded-md shadow-sm text-left -space-y-px">
						<div className="mb-4 mr-1">
							<label
								className="block text-grey-darker text-sm font-bold mb-2"
								htmlFor="mobile-number">
								Mobile No.{' '}
								<span className="text-red-900">*</span>
							</label>
							<input
								className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
								required
								name="mobileNumber"
								type="tel"
								placeholder="Your mobile no."
								value={formValue.mobileNumber || ''}
								onChange={handleChange}
							/>
						</div>

						<div className="mb-4">
							<label
								className="block text-grey-darker text-sm font-bold mb-2"
								htmlFor="password">
								Password <span className="text-red-900">*</span>
							</label>
							<input
								className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
								name="password"
								type="password"
								required
								placeholder="Password"
								value={formValue.password || ''}
								onChange={handleChange}
							/>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							onClick={handleClick}>
							<span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
							Sign in
						</button>
					</div>
				</form> */}
				<Form
					initialValues={{
						remember: true,
					}}
					layout="vertical"
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}>
					<Form.Item
						label="Mobile Number"
						required
						tooltip="Mobile Number is a required field">
						<Input
							name="mobileNumber"
							value={formValue.mobileNumber || ''}
							onChange={handleChange}
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
							rules={[
								{
									required: true,
									message: 'Please enter your password!',
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
							Login
						</Button>
					</Form.Item>
					<Form.Item className="text-center text-blue-700 font-medium	">
						<Link to="/forgot-password">Forgot Password?</Link>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
};

Login.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
