import { Image } from 'expo-image';
import { router } from 'expo-router';
import { FlatList, Pressable, StyleSheet } from 'react-native';

import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { IGPost } from '@/data/instagram-mock';

export function ExploreGrid({ posts }: { posts: IGPost[] }) {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <FlatList
      data={posts}
      keyExtractor={(p) => p.id}
      numColumns={3}
      renderItem={({ item }) => (
        <Pressable onPress={() => router.push(`/post/${item.id}`)} style={styles.item}>
          <Image
            source={{ uri: item.imageUri }}
            style={[styles.thumb, { backgroundColor: Colors[colorScheme].card }]}
            contentFit="cover"
          />
        </Pressable>
      )}
      contentContainerStyle={styles.content}
      columnWrapperStyle={styles.row}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  content: { paddingHorizontal: 1, paddingBottom: 24 },
  row: { gap: 1 },
  item: { flex: 1 },
  thumb: { aspectRatio: 1 },
});
