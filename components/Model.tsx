import { Bounds, Center, useGLTF } from '@react-three/drei/native'
import { useThree } from '@react-three/fiber/native'
import { useEffect } from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & any

const Model = (props: any) => {
  const gltf = useGLTF(props.currentProduct.glbLink) as GLTFResult
  const { scene: Scene } = useThree()
  const TextureLoader = new THREE.TextureLoader()
  TextureLoader.setCrossOrigin('*')

  useEffect(() => {
    Scene.traverse((obj: any) => {
      Object.entries(props.currentVariation.varData).forEach(
        ([name, data]: any) => {
          if (name === obj.name && obj.type === 'Mesh') {
            if (data.map) {
              const albedoMap = TextureLoader.load(data.map)
              albedoMap.repeat.set(data.repeatX, data.repeatY)
              albedoMap.wrapS = THREE.RepeatWrapping
              albedoMap.wrapT = THREE.RepeatWrapping
              albedoMap.colorSpace = THREE.SRGBColorSpace
              obj.material.map = albedoMap
            }
            obj.material.color = new THREE.Color(
              data.color
            ).convertSRGBToLinear()
            obj.material.needsUpdate = true
          }
        }
      )
    })

    return () => {}
  }, [props.currentVariation])

  return (
    <Bounds fit clip observe margin={1.2}>
      <Center>
        <primitive object={gltf.scene} />
      </Center>
    </Bounds>
  )
}

export default Model
