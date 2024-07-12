import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const SingleProduct = ({ item }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/texture/fabric1.jpg')}
          style={styles.image}
        />
      </View>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.desc}>{item.desc}</Text>
    </View>
  )
}

export default SingleProduct

const styles = StyleSheet.create({
  container: {
    width: '46%',
    margin: '2%',
    backgroundColor: '#ffffff',
    padding: 10,
    paddingBottom: 15,
    marginBottom: 10,
    borderRadius: 15,
  },

  imageContainer: {
    height: 120,
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 10,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#161616',
  },
  desc: {
    fontSize: 14,

    color: '#161616',
  },
})
