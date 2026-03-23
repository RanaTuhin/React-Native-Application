# State and data

This clone stores everything **in memory** so you can focus on fundamentals.

## Data types

Open `data/instagram-mock.ts`:

- `IGUser`, `IGPost`, `IGComment`, `IGNotification`
- `createMockData()` seeds the app with initial users/posts/notifications

## Store

Open `state/ig-store.tsx`:

- `IGProvider` wraps the app and provides state through Context
- The reducer handles actions:
  - `toggle_like`
  - `add_post`
  - `add_comment`

Try these experiments:

1. Add a new action `follow_user`
2. Update the Profile screen to show follow/unfollow
3. Add a new notification when someone likes your post

Next: `docs/04-ui-patterns.md`

