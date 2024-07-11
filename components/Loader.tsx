import { ActivityIndicator, StyleSheet, View } from 'react-native'
import React from 'react'

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'black'} />
    </View>
  )
}

export default Loader
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
