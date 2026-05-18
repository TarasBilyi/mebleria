import axios from 'axios';
import { BASE_URL, ENDPOINT } from './constans';

axios.defaults.baseURL = BASE_URL;

export async function fetchCategories() {
  const { data } = await axios.get(ENDPOINT.CATEGORIES);
  return data;
}

export async function fetchFurnitures(params = {}) {
  const { data } = await axios.get(ENDPOINT.FURNITURES, { params });
  return data;
}
