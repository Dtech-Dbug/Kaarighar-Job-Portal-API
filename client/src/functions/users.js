import axios from "axios";

export const verifyUser = async (values) => {
	return await axios.post("http://localhost:8000/api/admin/verifyuser", {
		values,
		headers: {
			"auth-token":
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEwOTQ4NTE0M2UyNTk0M2Q0NDk1MjFjIiwicm9sZSI6IkpvYiBTZWVrZXIifSwiaWF0IjoxNjI4MTc0NDQzLCJleHAiOjE2Mjg2MDY0NDN9.4zIVsEBtja-QT7TEZSwMpYY5etSbpl2bpbUU2R5C6so",
		},
	});
};

export const getAllUsers = async (authtoken) => {
	return await axios.get("http://localhost:8000/api/users", {
		headers: {
			authtoken,
		},
	});
};
