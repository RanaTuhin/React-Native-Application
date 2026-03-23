import React, { PropsWithChildren, useCallback, useMemo, useReducer } from 'react';

import { createMockData, IGNotification, IGPost, IGUser } from '@/data/instagram-mock';

type State = {
  users: IGUser[];
  posts: IGPost[];
  notifications: IGNotification[];
  currentUserId: string;
};

type Action =
  | { type: 'toggle_like'; postId: string }
  | { type: 'add_post'; caption: string; imageUri: string }
  | { type: 'add_comment'; postId: string; text: string };

function createId(prefix: string) {
  return `${prefix}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 9)}`;
}

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'toggle_like': {
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id !== action.postId) return post;
          const likedByMe = !post.likedByMe;
          return { ...post, likedByMe, likesCount: Math.max(0, post.likesCount + (likedByMe ? 1 : -1)) };
        }),
      };
    }
    case 'add_post': {
      const newPost: IGPost = {
        id: createId('p'),
        authorId: state.currentUserId,
        imageUri: action.imageUri,
        caption: action.caption,
        likesCount: 0,
        likedByMe: false,
        createdAtLabel: 'now',
        comments: [],
      };

      return { ...state, posts: [newPost, ...state.posts] };
    }
    case 'add_comment': {
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post.id !== action.postId) return post;
          return {
            ...post,
            comments: [
              ...post.comments,
              {
                id: createId('c'),
                userId: state.currentUserId,
                text: action.text,
                createdAtLabel: 'now',
              },
            ],
          };
        }),
      };
    }
    default:
      return state;
  }
}

const IGContext = React.createContext<{
  users: IGUser[];
  posts: IGPost[];
  notifications: IGNotification[];
  currentUser: IGUser;
  getUserById: (id: string) => IGUser;
  getPostById: (id: string) => IGPost | null;
  toggleLike: (postId: string) => void;
  addPost: (caption: string, imageUri: string) => void;
  addComment: (postId: string, text: string) => void;
} | null>(null);

export function IGProvider({ children }: PropsWithChildren) {
  const initial = useMemo(() => createMockData(), []);
  const [state, dispatch] = useReducer(reducer, initial);

  const getUserById = useCallback(
    (id: string) => {
      const user = state.users.find((u) => u.id === id);
      if (!user) throw new Error(`Unknown user: ${id}`);
      return user;
    },
    [state.users]
  );

  const getPostById = useCallback((id: string) => state.posts.find((p) => p.id === id) ?? null, [state.posts]);

  const currentUser = useMemo(() => getUserById(state.currentUserId), [getUserById, state.currentUserId]);

  const value = useMemo(() => {
    return {
      users: state.users,
      posts: state.posts,
      notifications: state.notifications,
      currentUser,
      getUserById,
      getPostById,
      toggleLike: (postId: string) => dispatch({ type: 'toggle_like', postId }),
      addPost: (caption: string, imageUri: string) => dispatch({ type: 'add_post', caption, imageUri }),
      addComment: (postId: string, text: string) => dispatch({ type: 'add_comment', postId, text }),
    };
  }, [currentUser, getPostById, getUserById, state.notifications, state.posts, state.users]);

  return <IGContext.Provider value={value}>{children}</IGContext.Provider>;
}

export function useIGStore() {
  const ctx = React.useContext(IGContext);
  if (!ctx) throw new Error('useIGStore must be used inside <IGProvider>');
  return ctx;
}

