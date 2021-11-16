const axios = require("axios");

let URL = "http://localhost:8000/api/";

function getSubs() {
  return axios.get(`${URL}sub-categories`);
}

function getSubsById(id) {
  return axios.get(`${URL}sub-categories/${id}`);
}

function createSubs(values, authtoken) {
  return axios.post(`${URL}sub-category`, values, {
    headers: {
      authtoken,
    },
  });
}

function editSubs(id, values, authtoken) {
  return axios.post(`${URL}sub-category/${id}`, values, {
    headers: { authtoken },
  });
}

function deleteSubs(id) {
  return axios.delete(`${URL}sub-category/${id}`);
}

export { getSubs, getSubsById, createSubs, editSubs, deleteSubs };
