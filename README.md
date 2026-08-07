# Authentication System

## Project Overview

This repository contains a full-stack authentication application with a Next.js frontend and an Express backend. The system includes registration, login, protected dashboard access, JWT authentication, refresh tokens, and polished enterprise-grade UI.

## Features

- User registration with strong password validation
- Login with JWT access token
- Secure refresh token handling in HTTP-only cookies
- Protected dashboard route
- Responsive Tailwind CSS UI
- Backend input validation and error handling
- Prisma ORM with PostgreSQL

## Folder Structure

- `Backend/` - Express API, Prisma schema, authentication services
- `Frontend/` - Next.js app router frontend with login/register/dashboard pages

## Setup

1. Install dependencies in both folders:
   - `cd Backend && npm install`
   - `cd Frontend && npm install`
2. Configure environment variables in `Backend/.env` and `Frontend/.env.local`.
3. Run Prisma migration from `Backend`:
   - `npm run prisma:generate`
   - `npm run prisma:migrate`
4. Start the backend:
   - `npm run dev`
5. Start the frontend:
   - `npm run dev`

## Deployment

- Frontend: Deploy `Frontend` to Vercel
- Backend: Deploy `Backend` to Vercel

## API Endpoints

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/auth/profile`

"Start backend"
cd "C:\Users\4IR Research Lab\Desktop\Authentication\Backend"
npm install
npx prisma generate
npm run dev

Start frontend
cd "C:\Users\4IR Research Lab\Desktop\Authentication\Frontend"
npm install
npm run dev

Verify build
cd "C:\Users\4IR Research Lab\Desktop\Authentication\Backend"
npm run build

