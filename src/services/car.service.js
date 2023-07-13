import axios from 'axios';

const url = 'http://localhost:3000/data';

export const CarService = {
  async getAll() {
    const response = await axios.get(url);
    return response.data;
  },
  async getById(id) {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
  },

  async create(data) {
    return axios.post(url, data);
  },
};
