import React, { useState, useEffect } from "react";
import { readCategory } from "../../functions/categories";

//function to fetch data of a sinle category

const EditCategory = ({ match }) => {
	const [category, setCategory] = useState();
	const [formValue, setFormValue] = useState("");

	useEffect(() => {
		fetchData();
	}, []);

	// const { title } = category;

	const fetchData = () =>
		readCategory(match.params.slug).then((res) => {
			console.log("Categoty:", res);
			setCategory(res.data);
			setFormValue(res.data.title);
		});

	const editCategoryForm = () => (
		<form>
			<input
				type="text"
				// value={category.title}
				value={formValue}
				onChange={(e) => setFormValue(e.target.value)}
			/>
			<button>Submit</button>
		</form>
	);

	console.log("Match", match);
	return (
		<>
			{/* <h1>Edit category : {match.params.slug} </h1> */}
			<br />
			<div>{editCategoryForm()}</div>
		</>
	);
};

export default EditCategory;
