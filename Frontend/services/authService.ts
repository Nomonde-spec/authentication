import api from './api';

export type RegisterPayload = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export const registerUser = async (payload: RegisterPayload) => {
  const { confirmPassword, ...body } = payload;
  const response = await api.post('/auth/register', body);
  return response.data;
};

export const loginUser = async (payload: LoginPayload) => {
  const response = await api.post('/auth/login', payload);
  return response.data;
};

export const logoutUser = async () => {
  const response = await api.post('/auth/logout');
  return response.data;
};

export const fetchProfile = async () => {
  const response = await api.get('/auth/profile');
  return response.data;
};

export type UpdateProfilePayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
};

export const updateProfile = async (payload: UpdateProfilePayload) => {
  const response = await api.patch('/auth/profile', payload);
  return response.data;
};
