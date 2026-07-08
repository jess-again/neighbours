import { View, Text, Button, StyleSheet } from 'react-native';

export default function FeedScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Neighbours 📸
      </Text>

      <Text>
        Your photo feed will live here
      </Text>

      <Button
        title="Go to Bulletin"
        onPress={() => navigation.navigate('Bulletin')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});