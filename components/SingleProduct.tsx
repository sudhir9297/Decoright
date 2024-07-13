import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useRouter } from 'expo-router'

const SingleProduct = ({ item }: any) => {
  const router = useRouter()

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        router.push({
          pathname: '/product',
          params: { productName: item[0] },
        })
      }
    >
      <View style={styles.imageContainer}>
        <Image source={item[1].thumbnail} style={styles.image} />
      </View>
      <Text style={styles.title}>{item[1].name}</Text>
      <Text style={styles.desc}>{item[1].desc}</Text>
    </TouchableOpacity>
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
    borderRadius: 10,
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
    objectFit: 'contain',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#161616',
    marginBottom: 4,
  },
  desc: {
    fontSize: 14,
    color: '#9b9a99',
  },
})
