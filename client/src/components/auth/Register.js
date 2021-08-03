import React, { useState } from 'react';

//importinf functions to make reqs to backend
import { registerUser } from '../../functions/registerUser';

const Register = () => {
	const handleClick = (e) => {
		e.preventDefault();
		console.log('handleClick');
		console.table(formValue);

		registerUser(formValue)
			.then((res) => {
				console.log(res);
				if (res.data.ok) {
					alert('User already exits');
				} else {
					alert('User created');
				}
			})
			.catch((err) => alert(err));
	};

	const [formValue, setFormValue] = useState({
		firstName: 'john',
		lastName: 'doe',
		mobileNumber: '1234567890',
		email: 'johndoe@gmail.com',
		password: 'password',
		aadharCard: '14632161566',
		panCard: '12345678d9',
		address:
			'B-201 Triveni Residency Plot No. 23-24 Shree Narayan Nagar Society Near VEG. Market',
		city: 'Surat',
		pinCode: '395004',
		role: 'admin',
	});

	const handleChange = (event) => {
		setFormValue((prevState) => ({
			...prevState,
			[event.target.name]: event.target.value,
		}));

		console.table({
			Target: event.target.name,
			Value: event.target.value,
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
						Sign up to your account
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						Or{' '}
						<a
							href="/#"
							className="font-medium text-indigo-600 hover:text-indigo-500">
							Sign in to your account
						</a>
					</p>
				</div>
				<form className="mt-8 space-y-6" action="#" method="POST">
					<input type="hidden" name="remember" defaultValue="true" />
					<div className="rounded-md shadow-sm text-left -space-y-px">
						<div className="flex mb-4">
							<div className="w-1/2 mr-1">
								<label
									className="block  text-grey-darker text-sm font-bold mb-2"
									htmlFor="first_name">
									First Name{' '}
									<span className="text-red-900">*</span>
								</label>
								<input
									className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
									name="firstName"
									type="text"
									required
									value={formValue.firstName || ''}
									placeholder="Yout first name"
									onChange={handleChange}
								/>
							</div>
							<div className="w-1/2 ml-1">
								<label
									className="block text-grey-darker text-sm font-bold mb-2"
									htmlFor="last_name">
									Last Name{' '}
									<span className="text-red-900">*</span>
								</label>
								<input
									className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
									name="lastName"
									type="text"
									required
									value={formValue.lastName || ''}
									placeholder="Your last name"
									onChange={handleChange}
								/>
							</div>
						</div>
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
						<div className="mb-4 ">
							<label
								className="block text-grey-darker text-sm font-bold mb-2"
								htmlFor="email-address">
								Email Address
							</label>
							<input
								className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
								name="email"
								type="email"
								required
								placeholder="Your email address"
								value={formValue.email || ''}
								onChange={handleChange}
							/>
						</div>
						<div className="mb-4">
							<label
								className="block text-grey-darker text-sm font-bold mb-2"
								htmlFor="aadharCard">
								Aadhar Card No.{' '}
								<span className="text-red-900">*</span>
							</label>
							<input
								className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
								type="text"
								required
								name="aadharCard"
								placeholder="Your aadhar no."
								value={formValue.aadharCard || ''}
								onChange={handleChange}
							/>
						</div>
						<div className="mb-4">
							<label
								className="block text-grey-darker text-sm font-bold mb-2"
								htmlFor="pan-no">
								Pan Card No.
							</label>
							<input
								className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
								type="text"
								name="panCard"
								placeholder="Your pan no"
								value={formValue.panCard || ''}
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
						<div className="mb-4">
							<label
								className="block text-grey-darker text-sm font-bold mb-2"
								htmlFor="password">
								Address <span className="text-red-900">*</span>
							</label>
							<input
								className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
								name="address"
								type="text"
								required
								placeholder="Your address"
								value={formValue.address || ''}
								onChange={handleChange}
							/>
						</div>
						<div className="flex mb-4">
							<div className="w-1/2 mr-1">
								<label
									className="block  text-grey-darker text-sm font-bold mb-2"
									htmlFor="pincode">
									Pincode{' '}
									<span className="text-red-900">*</span>
								</label>
								<input
									className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
									type="text"
									name="pinCode"
									required
									placeholder="Yout pincode"
									value={formValue.pinCode || ''}
									onChange={handleChange}
								/>
							</div>
							<div className="w-1/2 ml-1 mb-1">
								<label
									className="block text-grey-darker text-sm font-bold mb-2"
									htmlFor="city">
									City <span className="text-red-900">*</span>
								</label>
								<input
									className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
									type="text"
									name="city"
									required
									placeholder="Your city"
									value={formValue.city || ''}
									onChange={handleChange}
								/>
							</div>
						</div>
						{/* <div className="mb-4">
							<label
								className="block text-grey-darker text-sm font-bold mb-2"
								htmlFor="role">
								Role<span className="text-red-900">*</span>
							</label>
							<select
								id="country"
								name="country"
								autoComplete="country"
								className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
								<option>Admin</option>
								<option>Recruiter</option>
								<option>Job Seeker</option>
							</select>
						</div> */}
					</div>

					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
							onClick={handleClick}>
							<span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
							Sign up
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
