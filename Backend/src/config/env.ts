import dotenv from 'dotenv';

dotenv.config();

const required = [
  'PORT',
  'NODE_ENV',
  'DATABASE_URL',
  'JWT_SECRET',
  'JWT_REFRESH_SECRET',
  'JWT_EXPIRES_IN',
  'JWT_REFRESH_EXPIRES_IN',
  'CLIENT_URL'
] as const;

required.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`Missing environment variable: ${key}`);
  }
});

export const env = {
  port: Number(process.env.PORT),
  nodeEnv: process.env.NODE_ENV as 'development' | 'production',
  databaseUrl: process.env.DATABASE_URL as string,
  jwtSecret: process.env.JWT_SECRET as string,
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET as string,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN as string,
  jwtRefreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN as string,
  clientUrl: process.env.CLIENT_URL as string
};
