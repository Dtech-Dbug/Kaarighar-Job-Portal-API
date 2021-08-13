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
		password: 'qwerty123',
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
