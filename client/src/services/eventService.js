import axios from 'axios';

const API_URL = 'https://the-social-hub-vbmw.onrender.com';

export const getAllEvents = async (userData) => {
  const response = await axios.get(`${API_URL}/api/publicEvents`, {params: userData});
  return response.data;
};

export const getEventById = async(id) => {
  const response = await axios.get(`${API_URL}/api/publicEvents/${id}`);
  return response.data;
}

