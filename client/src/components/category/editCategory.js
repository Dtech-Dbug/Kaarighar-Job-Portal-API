import React, { useEffect } from "react";
import { readCategory } from "../../functions/categories";

//function to fetch data of a sinle category

const EditCategory = ({ match }) => {
	useEffect(() => {
		readCategory(match.params.slug).then((res) =>
			console.log("Categoty:", res)
		);
	}, []);

	console.log("Match", match);
	return (
		<>
			<h1>Edit category : {match.params.slug} </h1>
		</>
	);
};

export default EditCategory;
