import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const BASE_API_URL = 'https://api.unsplash.com/';

const API = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    accept: 'application/json',
    Authorization: 'Client-ID VDtTtT5UPk8Y5Jf_uPn5JH0CHi0fkMNqx66fQoFluoA',
  },
});

export const getRandomPhoto = async () => {
  const data = await API.get(`photos/random`);
  return data;
};

export const useRandomPhoto = () => {
  return useQuery({
    queryKey: ['random'],
    queryFn: getRandomPhoto,
    staleTime: 15 * 60 * 1000,
  });
};
