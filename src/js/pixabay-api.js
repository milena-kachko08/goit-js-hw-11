import axios from 'axios';
 
const API_KEY = '51015530-5e955df2a81e83cea790abd16';
const BASE_URL = 'https://pixabay.com/api/';
 
export const fetchImages = async (query, page = 1, perPage = 12) => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: perPage,
  });
 
  const url = `${BASE_URL}?${params.toString()}`;
 
  try {
    const response = await axios(url);
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};