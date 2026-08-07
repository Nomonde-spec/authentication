import bcrypt from 'bcrypt';
import { createUser, findUserByEmail, findUserById, updateRefreshToken, updateUserById } from '../repositories/userRepository';
import { signAccessToken, signRefreshToken, verifyRefreshToken } from '../utils/jwt';
import { AppError } from '../utils/errors';

export const registerUser = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  const existingUser = await findUserByEmail(data.email);
  if (existingUser) {
    throw new AppError('Email already registered', 409);
  }

  const hashedPassword = await bcrypt.hash(data.password, 12);
  const user = await createUser({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: hashedPassword
  });
  return user;
};

export const loginUser = async (email: string, password: string) => {
  const user = await findUserByEmail(email);
  if (!user) {
    throw new AppError('Invalid credentials', 401);
  }

  const passwordMatches = await bcrypt.compare(password, user.password);
  if (!passwordMatches) {
    throw new AppError('Invalid credentials', 401);
  }

  const accessToken = signAccessToken({ userId: user.id, email: user.email, role: user.role });
  const refreshToken = signRefreshToken({ userId: user.id, email: user.email, role: user.role });
  await updateRefreshToken(user.id, refreshToken);

  return { user, accessToken, refreshToken };
};

export const logoutUser = async (userId: string) => {
  await updateRefreshToken(userId, null);
};

export const refreshAccessToken = async (refreshToken: string) => {
  const payload = verifyRefreshToken<{ userId: string; email: string; role: string }>(refreshToken);
  const user = await findUserById(payload.userId);
  if (!user || user.refreshToken !== refreshToken) {
    throw new AppError('Invalid refresh token', 401);
  }

  const accessToken = signAccessToken({ userId: user.id, email: user.email, role: user.role });
  return { accessToken, user };
};

export const getProfile = async (userId: string) => {
  const user = await findUserById(userId);
  if (!user) {
    throw new AppError('User not found', 404);
  }
  return user;
};

export const updateProfile = async (userId: string, data: { firstName?: string; lastName?: string; email?: string }) => {
  if (data.email) {
    const existingUser = await findUserByEmail(data.email);
    if (existingUser && existingUser.id !== userId) {
      throw new AppError('Email already registered', 409);
    }
  }

  const user = await updateUserById(userId, data);
  return user;
};
