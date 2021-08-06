import axios from "axios";

//CRUD
const url = "http://localhost:8000/api/admin/category";

export const createCategory = async (values) => {
	return await axios.post(
		url,
		{ values },
		{
			headers: {
				"auth-token": localStorage.getItem("token"),
			},
		}
	);
};
