import React from "react";
import { Link } from "react-router-dom";

const CategoryList = ({ categoryList, handleCategoryDelete }) => {
	return (
		<div className="w-full p-4 ">
			<div className="flex flex-col">
				<div className="-my-2  sm:-mx-6 lg:-mx-6">
					<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
							<table className="min-w-full divide-y text-center divide-gray-200">
								<thead className="bg-gray-50">
									<tr>
										<th
											scope="col"
											className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Sr No.
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Name
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Date
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
										>
											Edit
										</th>
									</tr>
								</thead>
								{categoryList.map((category, index) => {
									return (
										<tbody
											key={category._id}
											className="bg-white divide-y divide-gray-200"
										>
											<tr>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm text-gray-900">
														{index + 1}
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="flex items-center">
														<div className="flex-shrink-0 h-10 w-10">
															<img
																className="h-10 w-10 rounded-full"
																src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
																alt=""
															/>
														</div>
														<div className="ml-4">
															<div className="text-sm font-medium text-gray-900">
																{category.title}
															</div>
														</div>
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<div className="text-sm text-gray-900">
														{
															// formate the date in a better way
															category.createdAt.substring(0, 10)
														}
													</div>
												</td>
												<td className="px-6 py-4 whitespace-nowrap">
													<button className="rounded-full border-2 border-purple-600 bg-purple-300 text-purple-900 py-1 px-6 uppercase">
														<Link to={`/category/${category.slug}`}>Edit</Link>
													</button>

													<button
														onClick={() => handleCategoryDelete(category.slug)}
														className="rounded-full border-2 border-purple-600 bg-purple-300 text-purple-900 py-1 px-6 uppercase"
													>
														Delete
													</button>
												</td>
											</tr>
										</tbody>
									);
								})}
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoryList;
