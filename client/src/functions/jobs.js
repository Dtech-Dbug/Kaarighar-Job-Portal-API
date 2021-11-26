import axios from "axios";
import API_URL from '../utils/API_URL';
const url = `${API_URL}`;

export const getAllJobs = async () => {
  return await axios.get(`${API_URL}/jobs`, {
    headers: {
      "auth-token": localStorage.getItem("token"),
    },
  });
};

export const getJobInfo = async (id) => {
  return await axios.get(`${API_URL}/job/${id}`, {
    headers: {
      "auth-token": localStorage.getItem("token"),
    },
  });
};
