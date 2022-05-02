import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'X-rapidAPI-Key': '606253c051msh7068d44bde5c130p101f38jsnd0bca2eb0911'
    },
  });
    
  return data;
} 