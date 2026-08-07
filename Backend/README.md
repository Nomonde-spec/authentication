# Auth Backend

## Overview

Express backend for authentication with Prisma, PostgreSQL, JWT access and refresh tokens, and secure cookie handling.

## Scripts

- `npm install` - install dependencies
- `npm run dev` - start development server
- `npm run build` - compile TypeScript
- `npm start` - run compiled build
- `npm run prisma:generate` - generate Prisma client
- `npm run prisma:migrate` - create database migration

## Environment Variables

Use `.env` in `Backend`:

```
PORT=4000
NODE_ENV=development
DATABASE_URL=
JWT_SECRET=
JWT_REFRESH_SECRET=
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
CLIENT_URL=http://localhost:3000
```
