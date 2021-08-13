import axios from "axios";

export const registerUser = async (values) => {
	return await axios.post("http://localhost:8000/api/register", { values });
};

export const loginUser = async (values) => {
	return await axios.post("http://localhost:8000/api/login", { values });
};

export const ForgotPassword = async (values) => {
	return await axios.post("http://localhost:8000/api/forgotPassword", { values });
}