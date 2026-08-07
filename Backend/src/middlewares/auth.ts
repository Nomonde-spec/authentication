import { NextFunction, Response } from 'express';
import { AuthRequest } from '../types/express';
import { verifyAccessToken } from '../utils/jwt';
import { AppError } from '../utils/errors';

export const authenticate = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(new AppError('Missing authorization header', 401));
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = verifyAccessToken<{ userId: string; email: string; role: string }>(token);
    req.user = {
      id: payload.userId,
      email: payload.email,
      role: payload.role
    };
    next();
  } catch {
    next(new AppError('Invalid or expired token', 401));
  }
};
