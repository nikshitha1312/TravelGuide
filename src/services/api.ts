import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const getDestinations = async () => {
  const response = await axios.get(`${API_URL}/destinations`);
  return response.data;
};

export const getActivitiesByDestination = async (destinationId: string) => {
  const response = await axios.get(`${API_URL}/activities/destination/${destinationId}`);
  return response.data;
}; 