import { ProductList } from '@/constants/productData'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Content = ({ handleTexture }: any) => {
  return (
    <View style={styles.contentWrapper}>
      <View style={styles.contentContainer}>
        {ProductList.chairs.vitra_eames.variation.map((el) => {
          return (
            <TouchableOpacity key={el.id} onPress={() => handleTexture(el)}>
              <Text>{el.name}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    </View>
  )
}

export default Content

const styles = StyleSheet.create({
  contentWrapper: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },

  contentContainer: {
    padding: 25,
  },
})
