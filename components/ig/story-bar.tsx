import { FlatList, StyleSheet, Text, View } from 'react-native';

import { Avatar } from '@/components/ig/avatar';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { useIGStore } from '@/state/ig-store';

export function StoryBar() {
  const colorScheme = useColorScheme() ?? 'light';
  const { users } = useIGStore();

  return (
    <View style={[styles.wrap, { borderBottomColor: Colors[colorScheme].border }]}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.content}
        data={users}
        keyExtractor={(u) => u.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Avatar uri={item.avatarUri} size={62} />
            <Text style={[styles.name, { color: Colors[colorScheme].mutedText }]} numberOfLines={1}>
              {item.username}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { borderBottomWidth: StyleSheet.hairlineWidth },
  content: { paddingHorizontal: 12, paddingVertical: 10, gap: 12 },
  item: { width: 78, alignItems: 'center', gap: 6 },
  name: { fontSize: 12 },
});

