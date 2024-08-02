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
  defaultInstance.post("/api/v1/auth/user/signup", {
    email,
    password,
    name,
    phone,
    gender,
    birthDate,
  });

// User login
export const userLogin = (email, password) =>
  defaultInstance.post("/api/v1/auth/user/login", { email, password });

// Caregiver sign up
export const caregiverSignUpAPI = (caregiverSignupState) =>
  defaultInstance.post("/api/v1/auth/caregiver/signup", caregiverSignupState);

export const caregiverLogInAPI = (email, password) =>
  defaultInstance.post("/api/v1/auth/caregiver/login", { email, password });
//간병 등록
export const careReservationInputAPI = (careReservationRequest) =>
  defaultInstance.post(
    "/api/v1/care-reservation/careReservationInput",
    careReservationRequest
  );
//특정 간병인 요청
export const careReservationRequestAPI = (CaregiverReservationRequest) =>
  defaultInstance.post(
    "/api/v1/care-reservation/careReservationRequest",
    CaregiverReservationRequest
  );
//간병인 수락
export const careReservationAcceptAPI = (email, password) =>
  defaultInstance.post("/api/v1/auth/caregiver/login", { email, password });
//간병인 거절
export const careReservationDenyAPI = (email, password) =>
  defaultInstance.post("/api/v1/auth/caregiver/login", { email, password });
//전체 간병인 요청 전환
export const careRequestAllAPI = (email, password) =>
  defaultInstance.post("/api/v1/auth/caregiver/login", { email, password });
//userId로 reservation 정보 가져오기
export const getUserById = (userId) =>
  defaultInstance.get(`/api/v1/care-reservation/user/${userId}`);
//id로 간병인
export const getCaregiverById = (caregiverId) =>
  defaultInstance.get(`/api/v1/caregiver/caregiverId/${caregiverId}`);
//간병인 id 로 리뷰 불러오기
export const getReviewsByCaregiverId = (caregiverId, page = 0, size = 10) =>
  defaultInstance.get(
    `/api/v1/reviews/caregiver/${caregiverId}?page=${page}&size=${size}`
  );
//리뷰 작성하기
export const createReview = (reviewData) =>
  defaultInstance.post("/api/v1/reviews", reviewData);
//전체 예약으로 변경
export const reservationToAll = (requestPayload) =>
  defaultInstance.post(
    "/api/v1/care-reservation/careRequestAll",
    requestPayload
  );
//특정간병인에게 요청된 예약 가져오기
export const getRequestedReservations = async (caregiverId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          status: "SUCCESS",
          data: {
            totalPages: 1,
            totalElements: 2,
            size: 20,
            content: [
              {
                id: 31,
                startDate: "2024-08-11",
                endDate: "2024-08-30",
                dailyStartTime: "19:10:00",
                dailyEndTime: "19:11:00",
                reservationReason: "이 새키 정신 오락가락함",
                reservationLocation: "인천 청라국제도시",
                diseaseName: "조현병",
                caregiverResponse: {
                  id: 51,
                  name: "박명수",
                },
                userResponse: {
                  id: 11,
                  name: "강한남자 박강식",
                  phone: "0101234568",
                },
                patientName: "민정연",
                patientGender: "여성",
                patientBirthDate: "1998-02-17",
                patientHeight: "158",
                patientWeight: "48",
                state: 1,
              },
              {
                id: 33,
                startDate: "2024-08-03",
                endDate: "2024-08-24",
                dailyStartTime: "20:10:00",
                dailyEndTime: "20:11:00",
                reservationReason: "sad",
                reservationLocation: "sad",
                diseaseName: "알츠하이머",
                caregiverResponse: {
                  id: 51,
                  name: "박명수",
                },
                userResponse: {
                  id: 12,
                  name: "이도경",
                  phone: "21323234",
                },
                patientName: "sdfa",
                patientGender: "남성",
                patientBirthDate: "2024-08-16",
                patientHeight: "21",
                patientWeight: "12",
                state: 1,
              },
            ],
          },
        },
      });
    }, 1000);
  });
};

//예약 허가
export const acceptReservation = async ({ caregiverId, reservationId }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: "SUCCESS" });
    }, 500);
  });
};

export const denyReservation = async ({ caregiverId, reservationId }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ status: "SUCCESS" });
    }, 500);
  });
};
// 모든 간병인 대상 요청 정보 불러오기
export const getAllRequestedReservations = async (caregiverId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: {
          status: "SUCCESS",
          data: {
            totalPages: 1,
            totalElements: 2,
            size: 20,
            content: [
              {
                id: 29,
                startDate: "2024-08-17",
                endDate: "2024-09-07",
                dailyStartTime: "13:38:00",
                dailyEndTime: "13:37:00",
                reservationReason: "치매",
                reservationLocation: "asef@asdf.com",
                diseaseName: "알츠하이머",
                caregiverResponse: {
                  id: 50,
                  name: "야나두",
                },
                userResponse: {
                  id: 10,
                  name: "이수근",
                  phone: "12321321",
                },
                patientName: "asef@asdf.com",
                patientGender: "남성",
                patientBirthDate: "2024-08-21",
                patientHeight: "123",
                patientWeight: "123",
                state: 4,
              },
              {
                id: 32,
                startDate: null,
                endDate: null,
                dailyStartTime: null,
                dailyEndTime: null,
                reservationReason: "",
                reservationLocation: "",
                diseaseName: "",
                caregiverResponse: {
                  id: 50,
                  name: "야나두",
                },
                userResponse: {
                  id: 12,
                  name: "이도경",
                  phone: "21323234",
                },
                patientName: "이상혁",
                patientGender: "남성",
                patientBirthDate: "2024-08-22",
                patientHeight: "21",
                patientWeight: "12",
                state: 4,
              },
            ],
          },
        },
      });
    }, 1000);
  });
};

//id리스트로 간병인 요청
export const getCaregiversByIds = async (ids) => {
  try {
    const response = await defaultInstance.post("/api/v1/caregiver/byIds", ids);
    if (response.data && response.data.data) {
      return response.data.data;
    } else {
      throw new Error("Invalid response from getCaregiversByIds");
    }
  } catch (error) {
    console.error("Error in getCaregiversByIds:", error);
    throw error;
  }
};

// OpenAI Embedding API
export const embeddingResponse = async (diseaseName, reservationReason) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/embeddings",
      {
        model: "text-embedding-ada-002",
        input: `${diseaseName} ${reservationReason}`,
      },
      {
        headers: {
          Authorization:
            "Bearer sk-proj-rpazBnQJWfjRoP5TOTZpT3BlbkFJRpI7NE08NHAo1ujGW1AW",
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.data[0].embedding;
  } catch (error) {
    console.error("OpenAI API Error:", error);
    throw error;
  }
};

// Elasticsearch API
export const esResponse = async (embeddingVector) => {
  try {
    const response = await axios.post(
      "http://localhost:9200/newdick.newdick.caregiver_table/_search",
      {
        size: 5,
        query: {
          script_score: {
            query: { match_all: {} },
            script: {
              source:
                "cosineSimilarity(params.query_vector, 'career_description_double_vector') + 1.0",
              params: { query_vector: embeddingVector },
            },
          },
        },
        _source: ["id"], // Limit the fields returned to only the "id" field
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.hits.hits.map((hit) => hit._source.id);
  } catch (error) {
    console.error("Elasticsearch API Error:", error);
    throw error;
  }
};
