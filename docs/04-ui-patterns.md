# UI patterns (React Native)

## Lists

`FlatList` is used for performance:

- Feed: `app/(tabs)/index.tsx`
- Stories row: `components/ig/story-bar.tsx`
- Explore grid: `components/ig/explore-grid.tsx`
- Reels: `app/(tabs)/reels.tsx`

Key ideas:

- `keyExtractor` for stable keys
- `ListHeaderComponent` (used to put Stories above the feed)
- `numColumns` for grid layouts

## Reusable components

Open `components/ig/post-card.tsx`:

- Receives `post` + `author` as props
- Calls store actions like `toggleLike(post.id)`
- Exposes an `onPressComment` callback so screens decide navigation

## Theme tokens

Open `constants/theme.ts`:

- Light/dark color tokens
- Used by screens for background/text/border colors

Next: `docs/05-exercises.md`

