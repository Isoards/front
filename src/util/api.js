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
export const getReservationById = async (reservationId) => {
  try {
    const response = await defaultInstance.get(`/api/v1/care-reservation/${reservationId}`);
    return response.data; // 응답 데이터를 반환합니다.
  } catch (error) {
    console.error("API 호출 중 오류:", error);
    throw error; // 오류를 상위로 전파합니다.
  }
};
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
//유저 id로 리뷰 불러오기
export const getReviewsByUserId = (userId, page = 0, size = 10) =>
  defaultInstance.get(
    `/api/v1/reviews/userId/${userId}?page=${page}&size=${size}`
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
export const getRequestedReservations = (caregiverId) => {
  return defaultInstance.get(
    `api/v1/care-reservation/caregiver/requested/${caregiverId}`
  );
};
//예약 허가
export const acceptReservation = (data) => {
  return defaultInstance.post(
    `api/v1/care-reservation/careReservationAccept`,
    data
  );
};
//예약 거절
export const denyReservation = (data) => {
  return defaultInstance.post(
    `api/v1/care-reservation/careReservationDeny`,
    data
  );
};
// 모든 간병인 대상 요청 정보 불러오기
export const getAllRequestedReservations = (caregiverId) => {
  return defaultInstance.get(
    `api/v1/care-reservation/caregiver/allrequested/${caregiverId}`
  );
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
          "Content-Type": "application/json",
          Authorization:
            "Bearer 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",
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
