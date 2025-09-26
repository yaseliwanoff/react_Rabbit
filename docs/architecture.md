# Architecture Overview

## High-level
- Frontend: React (Vite) SPA living in `frontend/`
- Assets: `rabbit-assets-main/`
- Backend: placeholder `backend/` directory for future services

## Frontend structure
- `src/pages`: page-level routes (Home, Collection, Profile, etc.)
- `src/components`: UI components grouped by domain (Products, Layout, Common, Cart)
- `src/assets`: static assets

## State & Data
- Local component state for UI interactions
- API integration to be added in backend phase

## Build & Dev
- Vite dev server for hot reloading
- ESLint config at `frontend/eslint.config.js`
