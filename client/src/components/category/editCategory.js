import React, { useState, useEffect } from "react";
import { readCategory } from "../../functions/categories";

//function to fetch data of a sinle category

const EditCategory = ({ match }) => {
	const [category, setCategory] = useState();
	const [formValue, setFormValue] = useState("check");

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = () =>
		readCategory(match.params.slug).then((res) => {
			console.log("Categoty:", res);
			setCategory(res.data);
		});

	console.log("Match", match);
	return (
		<>
			<h1>Edit category : {match.params.slug} </h1>
			<br />
			{JSON.stringify(category)}
		</>
	);
};

export default EditCategory;
