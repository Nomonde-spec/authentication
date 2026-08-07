import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';
import { AuthRequest } from '../types/express';
import { registerUser, loginUser, logoutUser, getProfile, refreshAccessToken, updateProfile } from '../services/authService';
import { AppError } from '../utils/errors';

export const register = async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new AppError(errors.array()[0].msg, 400));
  }

  try {
    const user = await registerUser(req.body);
    res.status(201).json({ success: true, data: { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, role: user.role, createdAt: user.createdAt } });
  } catch (error) {
    next(error);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new AppError(errors.array()[0].msg, 400));
  }

  try {
    const { email, password } = req.body;
    const { user, accessToken, refreshToken } = await loginUser(email, password);
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000
    });
    res.status(200).json({ success: true, data: { user: { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, role: user.role, createdAt: user.createdAt }, accessToken } });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(200).json({ success: true, message: 'Logged out' });
    }

    const payload = JSON.parse(Buffer.from(refreshToken.split('.')[1], 'base64').toString());
    await logoutUser(payload.userId);
    res.clearCookie('refreshToken', { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax' });
    res.status(200).json({ success: true, message: 'Logged out' });
  } catch (error) {
    next(error);
  }
};

export const refresh = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      throw new AppError('Refresh token missing', 401);
    }

    const { accessToken, user } = await refreshAccessToken(refreshToken);
    res.status(200).json({ success: true, data: { accessToken, user: { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, role: user.role, createdAt: user.createdAt } } });
  } catch (error) {
    next(error);
  }
};

export const updateProfileController = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      throw new AppError('Not authenticated', 401);
    }

    const { firstName, lastName, email } = req.body;
    if (!firstName && !lastName && !email) {
      throw new AppError('No fields to update', 400);
    }

    const user = await updateProfile(userId, { firstName, lastName, email });
    res.status(200).json({ success: true, data: { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, role: user.role, createdAt: user.createdAt, updatedAt: user.updatedAt } });
  } catch (error) {
    next(error);
  }
};

export const profile = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      throw new AppError('Not authenticated', 401);
    }
    const user = await getProfile(userId);
    res.status(200).json({ success: true, data: { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName, role: user.role, createdAt: user.createdAt, updatedAt: user.updatedAt } });
  } catch (error) {
    next(error);
  }
};
