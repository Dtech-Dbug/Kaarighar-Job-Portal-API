import React from 'react';

const CategoryForm = ({ handleCategoryChange }) => {
	return (
		<div className="max-w-md w-full space-y-8">
			<div>
				<h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900">
					Category
				</h2>
			</div>
			<form className="mt-8 space-y-6" action="#" method="POST">
				<input type="hidden" name="remember" defaultValue="true" />
				<div className="rounded-md shadow-sm text-left -space-y-px">
					<div className="mb-4 mr-1">
						<label
							className="block text-grey-darker text-sm font-bold mb-2"
							htmlFor="category-name">
							Category Name
							<span className="text-red-900">*</span>
						</label>
						<input
							className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
							required
							name="category-name"
							type="text"
							onChange={handleCategoryChange}
							placeholder="Enter Category Name."
						/>
					</div>

					<div className="mb-4">
						<label
							className="block text-grey-darker text-sm font-bold mb-2"
							htmlFor="category-image">
							Category Image
							<span className="text-red-900">*</span>
						</label>
						<input
							className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
							name=""
							type="file"
							required
							placeholder=""
						/>
					</div>
				</div>

				<div>
					<button
						type="submit"
						className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						<span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
						Add Category
					</button>
				</div>
			</form>
		</div>
	);
};

export default CategoryForm;
