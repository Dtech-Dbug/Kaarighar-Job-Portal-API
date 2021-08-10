import React from 'react';

const Card = ({ icon, title, value }) => {
	return (
		<div className="shadow-md bg-white flex flex-row items-center rounded-md px-14 py-8">
			<div>
				<h1 className="text-5xl text-blue-500">{icon}</h1>
			</div>
			<div className="mx-4">
				<h2>{title}</h2>
				<h2 className="text-xl font-bold">{value}</h2>
			</div>
		</div>
	);
};

export default Card;
