import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
	const [formValue, setFormValue] = useState({
		mobileNumber: '1234567890',
		password: 'pass1234',
	});

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
					<p className="mt-2 text-center text-sm text-gray-600">
						Or{' '}
						<a
							href="/register"
							className="font-medium text-indigo-600 hover:text-indigo-500">
							Create an new account
						</a>
					</p>
				</div>
				<form className="mt-8 space-y-6" action="#" method="POST">
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
				</form>
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
