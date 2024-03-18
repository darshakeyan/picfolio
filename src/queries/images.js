import { useMemo } from "react";
import axios from "axios";
import {
  useQuery,
  QueryFunctionContext,
  useInfiniteQuery,
} from "@tanstack/react-query";

const BASE_API_URL = "https://api.unsplash.com/";

const API = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    accept: "application/json",
    Authorization: "Client-ID VDtTtT5UPk8Y5Jf_uPn5JH0CHi0fkMNqx66fQoFluoA",
    "Accept-Version": "v1",
  },
});

export const getRandomPhoto = async () => {
  const data = await API.get(`photos/random`);
  return data;
};

export const getPhotos = async ({
  pageParam = 1,
  queryKey,
}) => {
  try {
    const response = await API.get(`search/photos?page=${pageParam}&per_page=30&query=${queryKey[1]}`);
    return response;
  } catch(error) {
    throw new Error("Failed to fetch images");
  }
};

export const useRandomPhoto = () => {
  return useQuery({
    queryKey: ["random"],
    queryFn: getRandomPhoto,
    staleTime: 15 * 60 * 1000,
  });
};

export const usePhotos = (query: any) => {
  const queryKey = useMemo(() => {
    return ["photos", query];
  }, [query]);
  return useInfiniteQuery({
    queryKey: queryKey,
    queryFn: getPhotos,
    getNextPageParam: (lastPage:any) => {
      const dataLength = lastPage?.data?.results?.length; // length of the results 30
      const total = lastPage?.data?.total; // total items
      if (dataLength < total) {
        const currentPage = Math.ceil(dataLength / 30);
        return currentPage + 1;
      } 
      return null;
    },
    staleTime: 15 * 60 * 1000,
  });
};
