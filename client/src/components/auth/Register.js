import React from 'react';

const Register = () => {
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
									id="first_name"
									type="text"
									required
									placeholder="Yout first name"
									value="John"
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
									id="last_name"
									type="text"
									required
									placeholder="Your last name"
									value="Doe"
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
								id="mobile-no"
								required
								type="tel"
								placeholder="Your mobile no."
								value="8516655502"
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
								id="email"
								type="email"
								required
								placeholder="Your email address"
								value="johndeo@gmail.com"
							/>
						</div>
						<div className="mb-4">
							<label
								className="block text-grey-darker text-sm font-bold mb-2"
								htmlFor="aadhar-no">
								Aadhar Card No.{' '}
								<span className="text-red-900">*</span>
							</label>
							<input
								className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
								type="text"
								required
								name="aadhar-no"
								placeholder="Your aadhar no."
								maxLength="12"
								minLength="12"
								value="123456890945"
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
								name="pan-no"
								placeholder="Your pan no"
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
								value="123456"
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
								value="B-201 Triveni Residency Plot No. 23-24 Shree Narayan Nagar Society Near VEG. Market"
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
									name="pincode"
									required
									placeholder="Yout pincode"
									value="395044"
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
									value="surat"
								/>
							</div>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
