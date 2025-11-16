import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";

// ================= LOGIN ====================
export const LoginApi = async (username, password) => {
  const response = await axios.post(`${BASE_URL}token/`, {
    username,
    password,
  });
  return response.data; // returns { access, refresh }
};

// ================= TOKEN HANDLER =============
export const AuthToken = () => {
  const token = localStorage.getItem("access");
  if (token) {
    return { Authorization: `Bearer ${token}` };
  }
  return {};
};

// ================= ADD TRAINER ===============
export const addTrainer = async (trainer) => {
  const response = await axios.post(`${BASE_URL}trainer/`, trainer, {
    headers: AuthToken(),
  });
  return response.data;
};

// ================= SEARCH TRAINER ============
export const searchTrainer = async (filter = {}) => {
  const params = new URLSearchParams(filter).toString();
  const response = await axios.get(`${BASE_URL}trainer?${params}`, {
    headers: AuthToken(),
  });
  return response.data;
};

// ================= UPDATE TRAINER ============
export const updateTrainer = async (id, trainer) => {
  const response = await axios.put(`${BASE_URL}trainer/${id}/`, trainer, {
    headers: AuthToken(),
  });
  return response.data;
};

// ================= DELETE TRAINER ============
export const deleteTrainer = async (id) => {
  const response = await axios.delete(`${BASE_URL}trainer/${id}/`, {
    headers: AuthToken(),
  });
  return response.data;
};

// ================= GET SINGLE TRAINER =========
export const getTrainer = async (id) => {
  const response = await axios.get(`${BASE_URL}trainer/${id}/`, {
    headers: AuthToken(),
  });
  return response.data;
};
