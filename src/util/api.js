import axios from "axios";
import { QueryClient } from "@tanstack/react-query";
import { getAuthToken } from "./auth.js";

export const queryClient = new QueryClient();

const BASE_URL = "http://localhost:7000";

const axiosAPI = (url, options) => {
  const instance = axios.create({ baseURL: url, ...options });
  return instance;
};

// Auth Required
const axiosAuthAPI = (url, options) => {
  const instance = axios.create({ baseURL: url, ...options });
  instance.defaults.withCredentials = true;
  return instance;
};

export const defaultInstance = axiosAPI(BASE_URL);
export const authInstance = axiosAuthAPI(BASE_URL);

authInstance.interceptors.request.use(
  function (config) {
    const accessToken = getAuthToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// User sign up
export const userSignUp = (email, password, name, phone, gender, birthDate) =>
  defaultInstance.post('/api/v1/auth/user/signup', { email, password, name, phone, gender, birthDate });

// User login
export const userLogin = (email, password) =>
  defaultInstance.post('/api/v1/auth/user/login', { email, password });

// Caregiver sign up
export const caregiverSignUpAPI = (caregiverSignupState) =>
  defaultInstance.post('/api/v1/auth/caregiver/signup', caregiverSignupState);

export const caregiverLogInAPI = (email, password) =>
  defaultInstance.post('/api/v1/auth/caregiver/login', {email, password});
//간병 등록
export const careReservationInputAPI = (careReservationRequest) =>
  defaultInstance.post('api/v1/care-reservation/careReservationInput', careReservationRequest);
//특정 간병인 요청
export const careReservationRequestAPI = (email, password) =>
  defaultInstance.post('/api/v1/auth/caregiver/login', {email, password});
//간병인 수락 
export const careReservationAcceptAPI = (email, password) =>
  defaultInstance.post('/api/v1/auth/caregiver/login', {email, password});
//간병인 거절
export const careReservationDenyAPI = (email, password) =>
  defaultInstance.post('/api/v1/auth/caregiver/login', {email, password});
//전체 간병인 요청 전환
export const careRequestAllAPI = (email, password) =>
  defaultInstance.post('/api/v1/auth/caregiver/login', {email, password});








// OpenAI Embedding API
export const embeddingResponse = async (diseaseName, reservationReason) => {
  try {
    return 1;
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw error;
  }
};

// Elasticsearch API
export const esResponse = async (embeddingVector) => {
  try {
    const response = await axios.post('http://localhost:9200/newdick.newdick.caregiver_table/_search', {
      size: 5,
      query: {
        script_score: {
          query: { match_all: {} },
          script: {
            source: "cosineSimilarity(params.query_vector, 'career_description_double_vector') + 1.0",
            params: { query_vector: embeddingVector }
          }
        }
      }
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data.hits.hits;
  } catch (error) {
    console.error('Elasticsearch API Error:', error);
    throw error;
  }
};