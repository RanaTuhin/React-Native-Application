# Overview

This repo is a *learning* React Native app: an Instagram-style UI clone built with Expo + Expo Router.

Goals:

- Practice layout (`View`, `Text`, `FlatList`, `Pressable`)
- Learn file-based routing with Expo Router
- Learn simple state management using Context + `useReducer`
- Learn component composition (small reusable UI pieces)

Non-goals (not included on purpose):

- Authentication
- Real backend (posts are stored in memory only)
- Real media picking/upload
- Real Reels video playback

If you want a “next step” backend later, you can swap the mock data for:

- REST API (Express, Fastify, etc.)
- Firebase / Supabase
- Expo SQLite for local persistence

## Quick mental model

- `app/` contains your screens (routes).
- `components/ig/` contains reusable UI.
- `state/ig-store.tsx` is the app store (mock “database” in memory).
- `data/instagram-mock.ts` is seeded data + TypeScript types.

Next: `docs/02-routing-and-navigation.md`

