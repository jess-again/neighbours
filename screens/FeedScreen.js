import { ScrollView, Text, StyleSheet } from 'react-native';
import PostCard from '../components/PostCard';
import { posts } from '../data/posts';

export default function FeedScreen() {
  return (
    <ScrollView 
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.title}>
        Neighbours 📸
      </Text>

      {posts.map((post) => (
        <PostCard
          key={post.id}
          name={post.name}
          caption={post.caption}
          time={post.time}
        />
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
  },

  contentContainer: {
    alignItems: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});