import axios from "axios";

export const registerUser = async (values) => {
	return await axios.post("http://localhost:8000/api/register", { values });
};
