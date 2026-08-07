import * as jwt from 'jsonwebtoken';
import { env } from '../config/env';

const signOptions = { expiresIn: env.jwtExpiresIn } as jwt.SignOptions;
const refreshOptions = { expiresIn: env.jwtRefreshExpiresIn } as jwt.SignOptions;

export const signAccessToken = (payload: { userId: string; email: string; role: string }) => {
  return jwt.sign(payload, env.jwtSecret, signOptions);
};

export const signRefreshToken = (payload: { userId: string; email: string; role: string }) => {
  return jwt.sign(payload, env.jwtRefreshSecret, refreshOptions);
};

export const verifyAccessToken = <T>(token: string): T => {
  return jwt.verify(token, env.jwtSecret) as T;
};

export const verifyRefreshToken = <T>(token: string): T => {
  return jwt.verify(token, env.jwtRefreshSecret) as T;
};
