import { View, Text, StyleSheet } from 'react-native';

export default function PostCard({ name, caption, time }) {
  return (
    <View style={styles.card}>

      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text>
            {name[0]}
          </Text>
        </View>

        <Text style={styles.name}>
          {name}
        </Text>
      </View>


      <View style={styles.photo}>
        <Text>
          📸 Photo
        </Text>
      </View>


      <Text style={styles.caption}>
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
    width: '90%',
    marginBottom: 20,
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
  },


  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },


  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },


  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },


  photo: {
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginBottom: 12,
  },


  caption: {
    fontSize: 16,
  },


  time: {
    marginTop: 8,
    fontSize: 12,
  },

});