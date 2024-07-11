import { Canvas } from '@react-three/fiber/native'
import { Text, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import useControls from 'r3f-native-orbitcontrols'
import { Suspense, useState } from 'react'
import Model from '@/components/Model'
import Loader from '@/components/Loader'
import Trigger from '@/components/Trigger'
import { StatusBar } from 'expo-status-bar'

export default function Index() {
  const [loading, setLoading] = useState<boolean>(false)
  const [OrbitControls, events] = useControls()

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated style="dark" />
      <View style={styles.canvasContainer} {...events}>
        {loading && <Loader />}
        <Canvas>
          <OrbitControls />
          <directionalLight position={[1, 0, 0]} args={['white', 2]} />
          <directionalLight position={[-1, 0, 0]} args={['white', 2]} />
          <directionalLight position={[0, 0, 1]} args={['white', 2]} />
          <directionalLight position={[0, 0, -1]} args={['white', 2]} />
          <directionalLight position={[0, 1, 0]} args={['white', 15]} />
          <directionalLight position={[0, -1, 0]} args={['white', 2]} />
          <Suspense fallback={<Trigger setLoading={setLoading} />}>
            <Model />
          </Suspense>
        </Canvas>
      </View>
      <View style={styles.contentWrapper}>
        <View style={styles.contentContainer}>
          <Text>Hello</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  canvasContainer: {
    flex: 1,
  },
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
