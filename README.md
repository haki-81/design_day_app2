# Design Day App 2.0

Node.js + TypeScript Express starter project.

## Project Structure

- src/config: runtime config helpers
- src/services: business logic modules
- src/routes: request routing layer
- src/middleware: centralized HTTP middleware
- src/app.ts: Express app factory
- src/index.ts: app entrypoint
- test: Vitest + Supertest route tests

## Scripts

- npm run dev: run in watch mode with tsx
- npm run build: compile TypeScript to dist
- npm start: run compiled output
- npm run lint: run ESLint for TypeScript files
- npm run format: run Prettier write mode
- npm test: run Vitest test suite

## Getting Started

1. npm install
2. npm run dev

## Endpoints

- GET /: service status text
- GET /api/v1/health: JSON health payload
