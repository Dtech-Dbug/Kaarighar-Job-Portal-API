import React from 'react';

const ItemDescription = ({ title, content }) => (
	<div className="flex items-center">
		<h2 className="font-bold py-2 pr-1">
			{title ? (
				<span>{title}:</span>
			) : (
				<span className="text-red-500"> No Data</span>
			)}
		</h2>
		{content ? (
			<span>{content}</span>
		) : (
			<span className="text-red-500"> No Data</span>
		)}
	</div>
);

export default ItemDescription;
