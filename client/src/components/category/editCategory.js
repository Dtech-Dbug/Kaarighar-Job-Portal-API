import React from "react";
import { useParams } from "react-router-dom";

//function to fetch data of a sinle category

const EditCategory = ({ match }) => {
	console.log("Match", match);
	return (
		<>
			<h1>Edit category : {match.params.slug} </h1>
		</>
	);
};

export default EditCategory;
