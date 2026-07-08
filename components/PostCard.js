import { View, Text, StyleSheet } from 'react-native';

export default function PostCard({ name, caption, time }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>
        {name}
      </Text>

      <View style={styles.photoPlaceholder}>
        <Text>
          📸 Photo
        </Text>
      </View>

      <Text>
        {caption}
      </Text>

      <Text style={styles.time}>
        {time}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 10,
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
  },

  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  photoPlaceholder: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
  },

  time: {
    marginTop: 5,
    fontSize: 12,
  },
});