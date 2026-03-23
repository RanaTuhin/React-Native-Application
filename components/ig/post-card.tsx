import Ionicons from '@expo/vector-icons/Ionicons';
import { Image } from 'expo-image';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Avatar } from '@/components/ig/avatar';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { IGPost, IGUser } from '@/data/instagram-mock';
import { useIGStore } from '@/state/ig-store';

export function PostCard({
  post,
  author,
  onPressComment,
  hideCommentCta,
}: {
  post: IGPost;
  author: IGUser;
  onPressComment: () => void;
  hideCommentCta?: boolean;
}) {
  const colorScheme = useColorScheme() ?? 'light';
  const { toggleLike } = useIGStore();

  return (
    <View style={styles.wrap}>
      <View style={styles.topRow}>
        <View style={styles.topLeft}>
          <Avatar uri={author.avatarUri} size={36} />
          <Text style={[styles.username, { color: Colors[colorScheme].text }]}>@{author.username}</Text>
        </View>
        <Ionicons name="ellipsis-horizontal" size={20} color={Colors[colorScheme].mutedText} />
      </View>

      <Image source={{ uri: post.imageUri }} style={styles.image} contentFit="cover" />

      <View style={styles.actions}>
        <View style={styles.actionsLeft}>
          <Pressable
            accessibilityRole="button"
            onPress={() => toggleLike(post.id)}
            style={styles.iconButton}
          >
            <Ionicons
              name={post.likedByMe ? 'heart' : 'heart-outline'}
              size={26}
              color={post.likedByMe ? Colors[colorScheme].danger : Colors[colorScheme].text}
            />
          </Pressable>
          <Pressable accessibilityRole="button" onPress={onPressComment} style={styles.iconButton}>
            <Ionicons name="chatbubble-outline" size={24} color={Colors[colorScheme].text} />
          </Pressable>
          <Pressable accessibilityRole="button" style={styles.iconButton}>
            <Ionicons name="paper-plane-outline" size={24} color={Colors[colorScheme].text} />
          </Pressable>
        </View>
        <Pressable accessibilityRole="button" style={styles.iconButton}>
          <Ionicons name="bookmark-outline" size={24} color={Colors[colorScheme].text} />
        </Pressable>
      </View>

      <View style={styles.meta}>
        <Text style={[styles.likes, { color: Colors[colorScheme].text }]}>
          {post.likesCount.toLocaleString()} likes
        </Text>
        <Text style={[styles.caption, { color: Colors[colorScheme].text }]}>
          <Text style={styles.captionUser}>@{author.username} </Text>
          {post.caption}
        </Text>
        {!hideCommentCta && (
          <Pressable onPress={onPressComment} style={styles.commentCta}>
            <Text style={[styles.commentCtaText, { color: Colors[colorScheme].mutedText }]}>
              View comments
            </Text>
          </Pressable>
        )}
        <Text style={[styles.time, { color: Colors[colorScheme].mutedText }]}>{post.createdAtLabel}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { paddingVertical: 10 },
  topRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 14 },
  topLeft: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  username: { fontSize: 14, fontWeight: '800' },
  image: { width: '100%', aspectRatio: 1, marginTop: 10, backgroundColor: '#ddd' },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 6,
  },
  actionsLeft: { flexDirection: 'row', alignItems: 'center' },
  iconButton: { padding: 8 },
  meta: { paddingHorizontal: 14, paddingTop: 2, gap: 6 },
  likes: { fontSize: 14, fontWeight: '800' },
  caption: { fontSize: 14, lineHeight: 18 },
  captionUser: { fontWeight: '800' },
  commentCta: { paddingVertical: 2 },
  commentCtaText: { fontSize: 13 },
  time: { fontSize: 12 },
});

