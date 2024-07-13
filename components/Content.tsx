import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

const Content = ({ currentProduct, currentVariation, handleTexture }: any) => {
  return (
    <View style={styles.contentWrapper}>
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.title}>Product Name</Text>
          <Text style={styles.desc}>{currentVariation.varDesc}</Text>
        </View>

        <View style={styles.variationWrapper}>
          <Text style={styles.variationText}>Variation:</Text>
          <View style={styles.variationContainer}>
            {currentProduct.variation.map((el: any) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.singleVariation,
                    el.id === currentVariation.id &&
                      styles.singleVariationHighlight,
                  ]}
                  key={el.id}
                  onPress={() => handleTexture(el)}
                >
                  <Image source={el.thumbnail} style={styles.variationImage} />
                </TouchableOpacity>
              )
            })}
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginVertical: 10,
          }}
        >
          <Text style={styles.title}>Rs.{currentVariation.price}</Text>
        </View>
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
    overflow: 'hidden',
  },

  contentContainer: {
    padding: 25,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#161616',
    marginBottom: 10,
  },
  desc: {
    fontSize: 16,
    color: '#9b9a99',
  },

  variationWrapper: {
    marginTop: 15,
  },

  variationText: {
    fontSize: 18,
    color: '#161616',
  },

  variationContainer: {
    flexDirection: 'row',
    marginVertical: 8,
  },

  singleVariationHighlight: {
    borderWidth: 1,
    borderColor: '#161616',
  },

  singleVariation: {
    width: 45,
    height: 45,
    marginRight: 10,
    borderRadius: 30,
    overflow: 'hidden',
    padding: 4,
  },

  variationImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    borderRadius: 20,
  },
})
