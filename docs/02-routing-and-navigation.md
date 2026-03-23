# Routing and navigation

This app uses **Expo Router** (file-based routing).

## The important files

- `app/_layout.tsx`
  - Creates a `Stack`
  - Wraps everything in `IGProvider` (global state)
  - Registers:
    - `(tabs)` (the bottom tab navigator)
    - `post/[id]` (a detail screen)
    - `create-post` (a modal)

- `app/(tabs)/_layout.tsx`
  - Creates a `Tabs` navigator with 5 tabs.

## Dynamic routes

`app/post/[id].tsx` is a dynamic route.

- `/post/p1` maps to the same screen, with `id = "p1"`
- In code, read it via `useLocalSearchParams()`

## Navigation actions

Look for `router.push(...)` in:

- `app/(tabs)/index.tsx` (open post detail)
- `components/ig/explore-grid.tsx` (open post detail)
- `app/(tabs)/index.tsx` (open create post modal)

Next: `docs/03-state-and-data.md`

