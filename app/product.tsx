import Content from '@/components/Content'
import Loader from '@/components/Loader'
import Model from '@/components/Model'
import Trigger from '@/components/Trigger'
import { Canvas } from '@react-three/fiber/native'
import { StatusBar } from 'expo-status-bar'
import useControls from 'r3f-native-orbitcontrols'
import { Suspense, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

// need to cleanUp
import { ProductList } from '@/constants/productData'

export default function Index() {
  const [loading, setLoading] = useState<boolean>(false)
  const [OrbitControls, events] = useControls()

  const [currentVariation, setActiveVariation] = useState(
    ProductList.chairs.vitra_eames.variation[0]
  )

  const handleTexture = (currentVariation: any) => {
    setActiveVariation(currentVariation)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated style="dark" />
      <View style={styles.canvasContainer} {...events}>
        {loading && <Loader />}
        <Canvas camera={{ position: [-5, 2, 5], fov: 26 }}>
          <OrbitControls enablePan={false} />

          <directionalLight position={[1, 0, 0]} args={['white', 2]} />
          <directionalLight position={[-1, 0, 0]} args={['white', 2]} />
          <directionalLight position={[0, 0, 1]} args={['white', 2]} />
          <directionalLight position={[0, 0, -1]} args={['white', 2]} />
          <directionalLight position={[0, 1, 0]} args={['white', 15]} />
          <directionalLight position={[0, -1, 0]} args={['white', 2]} />
          <Suspense fallback={<Trigger setLoading={setLoading} />}>
            <Model currentVariation={currentVariation} />
          </Suspense>
        </Canvas>
      </View>
      <Content handleTexture={handleTexture} />
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
