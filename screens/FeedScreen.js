import { View, Text, StyleSheet } from 'react-native';
import PostCard from '../components/PostCard';

export default function FeedScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Neighbours 📸
      </Text>

      <PostCard
        name="Jessica"
        caption="Friday drinks 🍻"
        time="2 hours ago"
      />

      <PostCard
        name="Tom"
        caption="Anyone up for a walk?"
        time="Yesterday"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});