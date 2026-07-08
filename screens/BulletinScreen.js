import { View, Text, Button, StyleSheet } from 'react-native';

export default function BulletinScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bulletin 📌
      </Text>

      <Text>
        Pub Tuesday?
      </Text>

      <Text>
        Run Saturday morning?
      </Text>

      <Button
        title="Back to Feed"
        onPress={() => navigation.navigate('Feed')}
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