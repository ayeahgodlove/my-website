import axios, { AxiosResponse } from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_CONTENTFUL_BASE_URL,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_CONTENT_DELIVERY_API_KEY}`,
  },
});

const responseBody = (response: AxiosResponse) => response.data;

export const requests = {
  get: (url: string) => api.get(url).then(responseBody),
  //   post: (url: string, body: {}) => api.post(url, body).then(responseBody),
  //   put: (url: string, body: {}) => api.put(url, body).then(responseBody),
  //   del: (url: string, body: {}) => api.delete(url, body).then(responseBody),
};
