export type IGUser = {
  id: string;
  username: string;
  name: string;
  avatarUri: string;
};

export type IGComment = {
  id: string;
  userId: string;
  text: string;
  createdAtLabel: string;
};

export type IGPost = {
  id: string;
  authorId: string;
  imageUri: string;
  caption: string;
  likesCount: number;
  likedByMe: boolean;
  createdAtLabel: string;
  comments: IGComment[];
};

export type IGNotification = {
  id: string;
  fromUserId: string;
  message: string;
  createdAtLabel: string;
};

export function createMockData() {
  const users: IGUser[] = [
    {
      id: 'u_me',
      username: 'you',
      name: 'You (Learner)',
      avatarUri: 'https://i.pravatar.cc/200?img=12',
    },
    { id: 'u_1', username: 'alex', name: 'Alex', avatarUri: 'https://i.pravatar.cc/200?img=32' },
    { id: 'u_2', username: 'maya', name: 'Maya', avatarUri: 'https://i.pravatar.cc/200?img=45' },
    { id: 'u_3', username: 'sam', name: 'Sam', avatarUri: 'https://i.pravatar.cc/200?img=8' },
    { id: 'u_4', username: 'lin', name: 'Lin', avatarUri: 'https://i.pravatar.cc/200?img=22' },
    { id: 'u_5', username: 'zoe', name: 'Zoe', avatarUri: 'https://i.pravatar.cc/200?img=5' },
  ];

  const posts: IGPost[] = [
    makePost('p1', 'u_1', 'Morning light in the city.'),
    makePost('p2', 'u_2', 'Coffee + code = happiness.'),
    makePost('p3', 'u_3', 'Weekend hike highlights.'),
    makePost('p4', 'u_4', 'Trying a new recipe today.'),
    makePost('p5', 'u_5', 'Tiny moments, big feelings.'),
    makePost('p6', 'u_1', 'Designing a cleaner UI.'),
  ];

  const notifications: IGNotification[] = [
    { id: 'n1', fromUserId: 'u_2', message: 'liked your post.', createdAtLabel: '2h' },
    { id: 'n2', fromUserId: 'u_4', message: 'started following you.', createdAtLabel: '5h' },
    { id: 'n3', fromUserId: 'u_1', message: 'commented: “Nice!”', createdAtLabel: '1d' },
  ];

  return { users, posts, notifications, currentUserId: 'u_me' };
}

function makePost(id: string, authorId: string, caption: string): IGPost {
  const seed = encodeURIComponent(id);
  return {
    id,
    authorId,
    imageUri: `https://picsum.photos/seed/${seed}/1080/1080`,
    caption,
    likesCount: 100 + Math.round(Math.random() * 5000),
    likedByMe: false,
    createdAtLabel: ['10m', '1h', '3h', '8h', '1d'][Math.floor(Math.random() * 5)] ?? '1d',
    comments: [],
  };
}

