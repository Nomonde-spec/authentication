import prisma from '../config/database';

export const findUserByEmail = async (email: string) => {
  return prisma.user.findUnique({ where: { email } });
};

export const findUserById = async (id: string) => {
  return prisma.user.findUnique({ where: { id } });
};

export const createUser = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  return prisma.user.create({ data });
};

export const updateRefreshToken = async (userId: string, refreshToken: string | null) => {
  return prisma.user.update({ where: { id: userId }, data: { refreshToken } });
};

export const updateUserById = async (userId: string, data: { firstName?: string; lastName?: string; email?: string }) => {
  return prisma.user.update({ where: { id: userId }, data });
};
